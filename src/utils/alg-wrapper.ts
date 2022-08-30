import * as Alg from "cubing/alg";

interface LetterPair {
  first: string;
  second: string;
}

class AlgWrapper {
  case: LetterPair
  alg: Alg.Alg;
  string: string | undefined;
  expanded: string | undefined;
  inverse: Alg.Alg;

  constructor(algCase: LetterPair, alg: Alg.Alg) {
    this.case = algCase;
    this.alg = alg!;
    this.string = alg.toString();
    this.inverse = alg.invert();
    this.getExpanded();
  }

  getExpanded(): void {
    let algStr = this.alg?.expand().simplify().toString();
    algStr = algStr.replace("3", "'");
    algStr = algStr.replace("''", "");

    this.expanded = new Alg.Alg(algStr).expand().simplify().toString();;
  }
}

export default AlgWrapper;
