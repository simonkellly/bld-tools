import create from 'zustand'

interface SettingsState {
  helpOpen: boolean;
  openHelp: () => void;
  closeHelp: () => void;
  
  showSolution: boolean;
  toggleShowSolution: () => any;
  
  darkMode: boolean;
  toggleDarkMode: () => any;
  
  tts: boolean;
  toggleTts: () => any;
  
  volume: number;
  setVolume: (volume: number) => any;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  helpOpen: false,
  openHelp: () => set({ helpOpen: true }),
  closeHelp: () => set({ helpOpen: false }),

  showSolution: false,
  toggleShowSolution: () => set((state) => ({ showSolution: !state.showSolution })),

  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  tts: false,
  toggleTts: () => set((state) => ({ tts: !state.tts })),

  volume: 50,
  setVolume: (volume: number) => set({ volume: volume }),
}))