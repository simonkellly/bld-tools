import create from 'zustand'

export const useAudioStore = create((set) => ({
  toSay: [],
}))