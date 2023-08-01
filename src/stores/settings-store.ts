import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  helpOpen: boolean;
  openHelp: () => void;
  closeHelp: () => void;

  showSolution: boolean;
  toggleShowSolution: () => any;

  hideFavourite: boolean;
  toggleHideFavourite: () => any;

  darkMode: boolean;
  toggleDarkMode: () => any;

  tts: boolean;
  toggleTts: () => any;

  volume: number;
  setVolume: (volume: number) => any;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      helpOpen: false,
      openHelp: () => set({ helpOpen: true }),
      closeHelp: () => set({ helpOpen: false }),

      showSolution: false,
      toggleShowSolution: () =>
        set((state) => ({ showSolution: !state.showSolution })),

      hideFavourite: false,
      toggleHideFavourite: () =>
        set((state) => ({ hideFavourite: !state.hideFavourite })),

      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      tts: false,
      toggleTts: () => set((state) => ({ tts: !state.tts })),

      volume: 50,
      setVolume: (volume: number) => set({ volume: volume }),
    }),
    {
      name: "settings",
    }
  )
);
