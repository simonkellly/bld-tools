import { createContext } from "react";
import AlgSheet from "../utils/alg-sheet";

interface AlgSheetProps {
  algSheet?: AlgSheet;
}

export const AlgSheetContext = createContext<AlgSheetProps>({});
