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
    this.expanded = alg.expand().simplify().toString();
    this.inverse = alg.invert();
  }
}

export default AlgWrapper;
