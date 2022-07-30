import { BluetoothPuzzle, connectSmartPuzzle } from "cubing/bluetooth";

interface ConnectionModalProps {
  btCube?: BluetoothPuzzle;
  setBtCube: (btCube: BluetoothPuzzle) => any;
  overrideCube: boolean;
  setOverrideCube: (overrideCube: boolean) => any;
}

export const ConnectionModal = (props: ConnectionModalProps) => {
  if (props.btCube || props.overrideCube) return <></>

  const connectCube = async () => {
    const cube = await connectSmartPuzzle();
    props.setBtCube(cube);
  }

  return (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">No smart cube connected!</h3>
        <p className="py-4">
          Please connect a smart cube to use this trainer. At the moment only
          the GAN 356i has been activly tested. Some devices and browsers may
          not support web-bluetooth (such as Opera GX).
        </p>
        <div className="modal-action">
          <button className="btn btn-secondary" onClick={() => props.setOverrideCube(true)}>I Don't Have One</button>
          <button className="btn btn-primary" onClick={connectCube}>Connect</button>
        </div>
      </div>
    </div>
  );
};
