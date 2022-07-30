import { BluetoothPuzzle } from "cubing/bluetooth";
import { createContext } from "react";
import AlgWrapper from "../utils/alg-wrapper";

export interface CaseProps {
  currentCase?: AlgWrapper;
  setCurrentCase?: (currentCase: AlgWrapper) => any;
  resetCases?: () => void;
  completeCase?: () => void;
  retryCase?: () => void;
  nextCase?: () => void;
  addResetListener?: (listener: () => void) => void;
}

export const CaseContext = createContext<CaseProps>({});
