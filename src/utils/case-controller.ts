import toast from "react-hot-toast";
import AlgSheet from "./alg-sheet";
import AlgWrapper from "./alg-wrapper";

interface LetterState {
  letter: string;
  selected: boolean;
}

export class CaseController {
  algSheet: AlgSheet;
  letterStates: LetterState[] = [];
  allowInverses: boolean = true;
  allowMultiple: boolean = false;
  remainingCases: AlgWrapper[] = [];
  onUpdateCases?: () => void;
  constructor(algSheet: AlgSheet) {
    this.algSheet = algSheet;

    algSheet.letters.forEach(letter => {
      this.letterStates.push({
        letter: letter,
        selected: true
      });
    });
    this.updatePotentialCases();
  }

  updatePotentialCases() {
    let activeLetters = this.letterStates.filter(letterState => letterState.selected).map(letterState => letterState.letter);
    if (activeLetters.length === 0) activeLetters = this.letterStates.map(letterState => letterState.letter);

    this.remainingCases = [];
    this.algSheet.algs.forEach(alg => {
      if (this.remainingCases.find((remainingCase) => remainingCase == alg)) return;
      if (this.allowInverses) {
        if (activeLetters.find(letter => letter == alg.case.second)) {
          this.remainingCases.push(alg);
          return;
        }
      }
      
      if (activeLetters.find(letter => letter == alg.case.first)) {
        this.remainingCases.push(alg);
        return;
      }
    });
    this.onUpdateCases && this.onUpdateCases();
  }

  getNextCase(): AlgWrapper {
    if (this.remainingCases.length === 0) {
      toast("All cases trained, resetting", { duration: 1000, position: "bottom-right" });
      this.updatePotentialCases();
    }
    const index = Math.floor(Math.random() * this.remainingCases.length);
    const alg = this.remainingCases[index];
    if (!this.allowMultiple){
      this.remainingCases.splice(index, 1);
    }
    return alg;
  }
}