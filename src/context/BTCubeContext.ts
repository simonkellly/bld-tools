import { BluetoothPuzzle } from "cubing/bluetooth";
import { createContext } from "react";

interface BTCubeProps {
  btCube?: BluetoothPuzzle;
  setBtCube?: (btCube: BluetoothPuzzle) => any;
}

export const BTCubeContext = createContext<BTCubeProps>({});
