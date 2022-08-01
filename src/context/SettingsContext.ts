import { createContext } from "react";

export interface SettingsProps {
  alwaysShowSolution?: boolean;
  setAlwaysShowSolution?: (alwaysShowSolution: boolean) => any;
}

export const SettingsContext = createContext<SettingsProps>({});
