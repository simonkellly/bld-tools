import * as BT from "cubing/bluetooth";
import { experimentalSolve3x3x3IgnoringCenters } from "cubing/search";

const CubeStuff = async () => {
  BT.enableDebugLogging(true);
  const device = await BT.connectSmartPuzzle();
  console.log(device as BT.GanCube);

  device.addMoveListener((move) => {
    experimentalSolve3x3x3IgnoringCenters(move.state!).then((solution) => {
      console.log(solution.toString());
    });
  });
};

export const CubeButton = () => {
  return (
    <button
      onClick={CubeStuff}
      className={`btn text-black btn-block aspect-square border-0`}
    >
      Button
    </button>
  );
};
