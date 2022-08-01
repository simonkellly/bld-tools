import { createContext } from "react";

export interface SettingsProps {
  alwaysShowSolution?: boolean;
  setAlwaysShowSolution?: (alwaysShowSolution: boolean) => any;
  darkMode?: boolean;
  setDarkMode?: (darkMode: boolean) => any;
  ttsEnabled?: boolean;
  setTtsEnabled?: (ttsEnabled: boolean) => any;
  volume?: number;
  setVolume?: (volume: number) => any;
}

export const SettingsContext = createContext<SettingsProps>({});
