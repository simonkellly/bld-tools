import { BluetoothPuzzle } from "cubing/bluetooth";
import { createContext } from "react";
import AlgWrapper from "../utils/alg-wrapper";
import { CaseController } from "../utils/case-controller";

export interface CaseProps {
  caseController?: CaseController;
  currentCase?: AlgWrapper;
  setCurrentCase?: (currentCase: AlgWrapper) => any;
  resetCases?: () => void;
  completeCase?: () => void;
  retryCase?: () => void;
  nextCase?: () => void;
  addRetryListener?: (listener: () => void) => void;
}

export const CaseContext = createContext<CaseProps>({});
