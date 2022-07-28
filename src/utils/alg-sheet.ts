import * as Alg from "cubing/alg";

export const SHEET_ID = "1NEYh8MeTqHwnwA4s_CAYBGWU76pqdlutxR0SA2hNZKk";
export const SHEET_NAME = "UFR Corners";

export class AlgWrapper {
  alg: Alg.Alg;
  string: string | undefined;
  expanded: string | undefined;
  
  constructor(alg: Alg.Alg) {
    this.alg = alg!;
    this.string = alg.toString();
    this.expanded = alg.expand().simplify().toString();
  }
}

declare type AlgSet = {
  [letter: string]: AlgWrapper;
};

declare type AlgArray = {
  [letter: string]: AlgSet;
};

export class AlgSheet {
  algArray: AlgArray;
  letters: string[];
  constructor(letters: string[], algArray: AlgArray) {
    this.algArray = algArray;
    this.letters = letters;
    this.generateInverses();
  }

  private generateInverses(): void {
    const inverses: AlgArray = {};
    for (const first in this.algArray) {
      for (const second in this.algArray[first]) {
        if (
          this.algArray[second] == undefined ||
          this.algArray[second][first] == undefined
        )
        inverses[second] ??= {};
        inverses[second][first] = this.getAlgFromInverse(second, first);
      }
    }

    for (const first in inverses) {
      for (const second in inverses[first]) {
        this.algArray[first] ??= {};
        this.algArray[first][second] = inverses[first][second];
      }
    }
  }

  private getAlgFromInverse(first: string, second: string): AlgWrapper {
    const algSet = this.algArray[second];
    if (algSet == undefined) {
      throw new Error(`No inverse for ${first}${second}`);
    }
    const alg = algSet[first];
    if (alg == undefined) {
      throw new Error(`No inverse for ${first}${second}`);
    }
    return new AlgWrapper(alg.alg.invert());
  }

  getAlg(first: string, second: string): AlgWrapper | undefined {
    const algSet = this.algArray[first];
    if (algSet == undefined) return undefined;
    const alg = algSet[second];
    if (alg == undefined) return undefined;
    return alg;
  }
}

export async function fetchGoogleSheet(
  sheetId: string,
  sheetName: string
): Promise<AlgSheet> {
  const apiURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetName}`;
  const sheetReq = await fetch(apiURL);
  const sheetData = await sheetReq.text();

  const sheetTrimmed = sheetData
    .split("\n", 2)[1]
    .replace(/google.visualization.Query.setResponse\(|\);/g, "");
  const data = JSON.parse(sheetTrimmed);

  const rows = data.table.rows.slice(1);

  const firstLetters: string[] = data.table.rows[0].c
    .slice(1)
    .map((cell: { v: string }) => cell?.v?.substring(0, 1));
  const secondLetters = rows
    .slice(1)
    .map((row: { c: { v: string }[] }) => row?.c[0]?.v?.substring(0, 1));

  const algArray: AlgArray = {};

  firstLetters.forEach((firstLetter: string, firstIndex: number) => {
    const algSet: AlgSet = {};
    secondLetters.forEach((secondLetter: string, secondIndex: number) => {
      const alg = rows[secondIndex + 1].c[firstIndex + 1]?.v;
      if (alg != undefined) {
        algSet[secondLetter] = new AlgWrapper(new Alg.Alg(alg));
      }
    });
    algArray[firstLetter] = algSet;
  });

  return new AlgSheet(firstLetters, algArray);
}