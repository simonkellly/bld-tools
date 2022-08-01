import { createContext } from "react";

export interface AudioPlayerProps {
  toSay: string[];
}

export const AudioPlayerContext = createContext<AudioPlayerProps>({toSay: []});
