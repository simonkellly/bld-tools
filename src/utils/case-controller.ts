import toast from "react-hot-toast";
import AlgSheet from "./alg-sheet";
import AlgWrapper from "./alg-wrapper";

interface LetterState {
  letter: string;
  selected: boolean;
}

export interface CaseControllerProps {
  letterStates?: LetterState[];
  favourites?: string[];
  showFavourites?: boolean;
  allowMultiple?: boolean;
  allowInverses?: boolean;
}

export class CaseController {
  algSheet: AlgSheet;
  letterStates: LetterState[] = [];
  favourites: string[] = [];
  showFavourites: boolean = false;
  allowInverses: boolean = true;
  allowMultiple: boolean = false;
  remainingCases: AlgWrapper[] = [];
  onUpdateCases?: (wasEmpty: boolean) => void;

  private storedState: CaseControllerProps;
  private setStoredState: (state: CaseControllerProps) => void;
  constructor(algSheet: AlgSheet, storedState: CaseControllerProps, setStoredState: (state: CaseControllerProps) => void) {
    this.algSheet = algSheet;

    this.storedState = storedState;
    this.setStoredState = setStoredState;

    this.favourites = this.storedState.favourites || [];
    this.showFavourites = this.storedState.showFavourites || false;
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
    const wasEmpty = this.remainingCases.length === 0;
    let activeLetters = this.letterStates.filter(letterState => letterState.selected).map(letterState => letterState.letter);
    if (activeLetters.length === 0 && (!this.showFavourites || this.favourites.length === 0)) activeLetters = this.letterStates.map(letterState => letterState.letter);

    this.remainingCases = [];

    this.remainingCases = this.algSheet.algs.filter(alg => {
      if (activeLetters.includes(alg.case.first) || (activeLetters.includes(alg.case.second) && this.allowInverses)) {
        return true;
      }

      if (this.showFavourites && (this.favourites.includes(alg.case.first + alg.case.second) || (this.allowInverses && this.favourites.includes(alg.case.second + alg.case.first)))) {
        return true;
      }

      return false;
    });

    const newStoredState: CaseControllerProps = {
      letterStates: this.letterStates,
      favourites: this.favourites,
      showFavourites: this.showFavourites,
      allowMultiple: this.allowMultiple,
      allowInverses: this.allowInverses
    }

    this.setStoredState(newStoredState);
    this.onUpdateCases && this.onUpdateCases(wasEmpty);
  }

  getNextCase(current?: AlgWrapper): AlgWrapper {
    if (!this.allowMultiple && current) {
      const oldIndex = this.remainingCases.findIndex((algCase) => {
        return algCase.case.first === current.case.first && algCase.case.second === current.case.second;
      });
      if (oldIndex > -1) {
        this.remainingCases.splice(oldIndex, 1);
      } else {
        console.log("Could not find old index: " + `${current.case.first}${current.case.second}`);
        console.log(current);
        console.log(this.remainingCases.map(alg => `${alg.case.first}${alg.case.second}`));
      }
    }

    if (this.remainingCases.length === 0) {
      
      toast("All cases complete, resetting", { duration: 2000 });
      this.updatePotentialCases();
    }

    const index = Math.floor(Math.random() * this.remainingCases.length);
    return this.remainingCases[index];
  }
}