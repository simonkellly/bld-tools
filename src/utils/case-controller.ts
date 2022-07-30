import toast from "react-hot-toast";
import useStorageState from "react-use-storage-state";
import AlgSheet from "./alg-sheet";
import AlgWrapper from "./alg-wrapper";

interface LetterState {
  letter: string;
  selected: boolean;
}

export interface CaseControllerProps {
  letterStates?: LetterState[];
  allowMultiple?: boolean;
  allowInverses?: boolean;
}

export class CaseController {
  algSheet: AlgSheet;
  letterStates: LetterState[] = [];
  allowInverses: boolean = true;
  allowMultiple: boolean = false;
  remainingCases: AlgWrapper[] = [];
  onUpdateCases?: () => void;

  private storedState: CaseControllerProps;
  private setStoredState: (state: CaseControllerProps) => void;
  constructor(algSheet: AlgSheet, storedState: CaseControllerProps, setStoredState: (state: CaseControllerProps) => void) {
    this.algSheet = algSheet;

    this.storedState = storedState;
    this.setStoredState = setStoredState;

    this.allowInverses = storedState.allowInverses == undefined ? true : storedState.allowInverses;
    this.allowMultiple = storedState.allowMultiple == undefined ? false : storedState.allowMultiple;

    if (storedState.letterStates) {
      this.letterStates = storedState.letterStates;
    } else {
      algSheet.letters.forEach(letter => {
        this.letterStates.push({
          letter: letter,
          selected: true
        });
      });
    }

    
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

    const newStoredState: CaseControllerProps = {
      letterStates: this.letterStates,
      allowMultiple: this.allowMultiple,
      allowInverses: this.allowInverses
    }

    this.setStoredState(newStoredState);
    this.onUpdateCases && this.onUpdateCases();
  }

  getNextCase(current?: AlgWrapper): AlgWrapper {
    if (this.remainingCases.length === 0) {
      toast("All cases complete, resetting", { duration: 2000, position: "bottom-right" });
      this.updatePotentialCases();
    }
    const index = Math.floor(Math.random() * this.remainingCases.length);
    const alg = this.remainingCases[index];
    
    if (!this.allowMultiple && current) {
      const oldIndex = this.remainingCases.indexOf(current);
      this.remainingCases.splice(oldIndex, 1);
    }
    return alg;
  }
}