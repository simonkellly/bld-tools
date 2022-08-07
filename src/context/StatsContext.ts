import { createContext } from "react";

export interface StatsProps {
  trainedCount: number;
  setTrainedCount: (count: number) => void;
}

export const StatsContext = createContext<StatsProps>({trainedCount: 0, setTrainedCount: (c) => {}});
