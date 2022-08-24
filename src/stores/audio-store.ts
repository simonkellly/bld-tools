import create from 'zustand'

interface AudioState {
  toSay: string[]
}

export const useAudioStore = create<AudioState>((set) => ({
  toSay: [],
}))