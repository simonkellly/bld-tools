import * as Alg from "cubing/alg";

class AlgWrapper {
  alg: Alg.Alg;
  string: string | undefined;
  expanded: string | undefined;

  constructor(alg: Alg.Alg) {
    this.alg = alg!;
    this.string = alg.toString();
    this.expanded = alg.expand().simplify().toString();
  }
}

export default AlgWrapper;
