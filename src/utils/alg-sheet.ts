import * as Alg from "cubing/alg";
import AlgWrapper from "./alg-wrapper";

const SHEET_ID = "1NEYh8MeTqHwnwA4s_CAYBGWU76pqdlutxR0SA2hNZKk";
export const SHEET_NAME = "UFR Corners";

declare type AlgSet = {
  [letter: string]: AlgWrapper;
};

declare type AlgCollection = {
  [letter: string]: AlgSet;
};

export default class AlgSheet {
  algArray: AlgCollection;
  algs: AlgWrapper[];
  letters: string[];
  constructor(letters: string[], algArray: AlgCollection) {
    this.algArray = algArray;
    this.letters = letters;
    this.generateInverses();
    this.algs = this.getAlgArray();
  }

  private generateInverses(): void {
    const inverses: AlgCollection = {};
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
    return new AlgWrapper({first: first, second: second}, alg.alg.invert());
  }

  getAlg(first: string, second: string): AlgWrapper | undefined {
    const algSet = this.algArray[first];
    if (algSet == undefined) return undefined;
    const alg = algSet[second];
    if (alg == undefined) return undefined;
    return alg;
  }

  private getAlgArray() {
    const algs: AlgWrapper[] = [];
    this.letters.forEach(firstLetter => {
      this.letters.forEach(secondLetter => {
        const alg = this.getAlg(firstLetter, secondLetter);
        if (alg != undefined) {
          algs.push(alg);
        }
      });
    });

    return algs;
  }
}

export async function fetchGoogleSheet(sheetName: string): Promise<AlgSheet> {
  const apiURL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${sheetName}`;
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

  const algArray: AlgCollection = {};

  firstLetters.forEach((firstLetter: string, firstIndex: number) => {
    const algSet: AlgSet = {};
    secondLetters.forEach((secondLetter: string, secondIndex: number) => {
      const alg = rows[secondIndex + 1].c[firstIndex + 1]?.v;
      if (alg != undefined) {
        algSet[secondLetter] = new AlgWrapper({first: firstLetter, second: secondLetter}, new Alg.Alg(alg));
      }
    });
    algArray[firstLetter] = algSet;
  });

  return new AlgSheet(firstLetters, algArray);
}