import { useEffect, useState } from "react";
import AlgSheet, { fetchGoogleSheet } from "../../utils/alg-sheet";
import AlgWrapper from "../../utils/alg-wrapper";
import * as Bluetooth from "cubing/bluetooth";
import { BluetoothModal } from "./BluetoothModal";
import { arraysEqual } from "../../utils/general-utils";

interface TimerState {
  cubeState: any;
  alg: AlgWrapper | undefined;
}

function getRandomAlg(algSheet: AlgSheet) {
  while (true) {
    const first = algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const second = algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const alg = algSheet.getAlg(first, second);
    if (alg != undefined) return alg;
  }
}

export const Timer = () => {
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  const [cube, setCube] = useState<Bluetooth.BluetoothPuzzle>();
  const [timerState, setTimerState] = useState<TimerState>();
  useEffect(() => {
    if (!algSheet) return;
    const randomAlg = getRandomAlg(algSheet);
    if (!cube) return;
    cube
      .getState()
      .then((state) => setTimerState({ alg: randomAlg, cubeState: state }));
  }, [cube]);

  useEffect(() => {
    checkSolve();
  }, [timerState]);

  const resetCube = () => {
    shouldStop = true;
  }

  let shouldStop = false;
  const checkSolve = async () => {
    console.log("CHECKING");
    while (true) {
      if (shouldStop) {
        const state = await cube!.getState();
        setTimerState({ alg: timerState?.alg, cubeState: state })
        return;
      }

      if (timerState == undefined) return;

      try {
        await (cube as any).intervalHandler();
        const state = await cube!.getState();
        const inverse = timerState.alg!.inverse;
        const toCheck = state.applyAlg(inverse!);

        const oldCorners = timerState!.cubeState.stateData.CORNERS;
        const newCorners = toCheck.stateData.CORNERS;

        const oldEdges = timerState!.cubeState.stateData.EDGES;
        const newEdges = toCheck.stateData.EDGES;

        if (
          algSheet &&
          arraysEqual(oldCorners.orientation, newCorners.orientation) &&
          arraysEqual(oldCorners.pieces, oldCorners.pieces) &&
          arraysEqual(oldEdges.orientation, oldEdges.orientation) &&
          arraysEqual(oldEdges.pieces, newEdges.pieces)
        ) {
          setTimerState({ alg: getRandomAlg(algSheet), cubeState: state });
          return;
        }
        
      } catch (error) {
        console.log(error);
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  };

  if (!algSheet)
    return (
      <div className="hero min-h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div>
          <p>{}</p>
          <p>{timerState?.alg?.string}</p>
          <h1 className="text-9xl font-bold">
            {timerState?.alg?.case.first || ""}
            {timerState?.alg?.case.second || ""}
            </h1>
          <div className="space-x-3">
            <button className="btn btn-primary" onClick={resetCube}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <BluetoothModal cube={cube} setCube={setCube} />
    </div>
  );
};
