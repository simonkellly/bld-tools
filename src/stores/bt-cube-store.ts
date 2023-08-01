import { BluetoothPuzzle } from 'cubing/dist/types/bluetooth';
import { create } from 'zustand'

interface BTCubeState {
  btCube: BluetoothPuzzle | null;
  setBtCube: (btCube: BluetoothPuzzle | null) => any;
}

export const useBTCubeStore = create<BTCubeState>((set) => ({
  btCube: null,
  setBtCube: (btCube: BluetoothPuzzle | null) => set({ btCube }),
}))