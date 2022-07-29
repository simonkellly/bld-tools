import * as Bluetooth from "cubing/bluetooth";
import { Dispatch } from "react";

interface BluetoothModalProps {
  cube: Bluetooth.BluetoothPuzzle | undefined;
  setCube: Dispatch<
    React.SetStateAction<Bluetooth.BluetoothPuzzle | undefined>
  >;
}

export const BluetoothModal = ({ cube, setCube }: BluetoothModalProps) => {
  if (cube) return <></>;

  const connectCube = async () => {
    const newCube = await Bluetooth.connectSmartPuzzle();
    (newCube as any).stopTrackingMoves();
    setCube(newCube);
  };

  return (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">No smart cube connected!</h3>
        <p className="py-4">
          Please connect a smart cube to use this trainer. At the moment only
          the GAN 356i is supported. Some browsers may also not support web
          Bluetooth.
        </p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={connectCube}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};