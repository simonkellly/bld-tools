import AlgSheet from "./alg-sheet";

interface LetterState {
  letter: string;
  selected: boolean;
}

export class CaseController{
  algSheet: AlgSheet;
  letterStates: LetterState[] = [];
  constructor(algSheet: AlgSheet) {
    this.algSheet = algSheet;

    algSheet.letters.forEach(letter => {
      this.letterStates.push({
        letter: letter,
        selected: true
      });
    });
  }
}