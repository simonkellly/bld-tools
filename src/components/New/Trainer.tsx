import {
  faSliders,
  faShuffle,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AlgSheet, { fetchGoogleSheet } from "../../utils/alg-sheet";
import AlgWrapper from "../../utils/alg-wrapper";
import { CaseSelector } from "./CaseSelector";
import { ConnectionModal } from "./ConnectionModal";
import { Footer } from "./Footer";
import { Loading } from "./Loading";
import { TrainerUI } from "./TrainerUI";
import { BluetoothPuzzle, MoveEvent } from "cubing/bluetooth";
import { RingBuffer } from 'ring-buffer-ts';
import { didSolve, KState } from "../../utils/cube-utils";

function getNextAlg(algSheet: AlgSheet): AlgWrapper {
  while (true) {
    const first =
      algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const second =
      algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const alg = algSheet.getAlg(first, second);
    if (alg != undefined) return alg;
  }
}

export const Trainer = () => {
  const [showCases, setShowCases] = useState(false);
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  const [currentAlg, setCurrentAlg] = useState<AlgWrapper>();

  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  useEffect(() => {
    if (!algSheet || currentAlg) return;
    setCurrentAlg(getNextAlg(algSheet));
  }, [algSheet]);

  const [btCube, setBtCube] = useState<BluetoothPuzzle>();
  const [overrideCube, setOverrideCube] = useState(false);
  const [moveBuffer] = useState<RingBuffer<string>>(new RingBuffer(8));
  
  let shouldReset = false;
  let shouldNextAlg = false;
  let shouldStop = false;

  const handleCubeState = async () => {
    let originalState: KState | undefined;
    let currentState: KState | undefined;

    btCube!.addMoveListener((move: MoveEvent) => {
      moveBuffer.add(move.latestMove.toString());
      processCubeCommands();
    });

    await (btCube as any).intervalHandler();

    while (true) {
      await new Promise(resolve => setTimeout(resolve));
      if (!btCube || !algSheet || !currentAlg) {
        continue;
      }

      if (shouldNextAlg) {
        shouldNextAlg = false;
        const alg = getNextAlg(algSheet);
        const state = await btCube.getState();

        originalState = state;
        setCurrentAlg(alg);
        return;
      }

      if (originalState == undefined) {
        const state = await btCube.getState();
        originalState = state;
        continue;
      }

      if (shouldReset) {
        shouldReset = false;
        const state = await btCube.getState();
        originalState = state;
        continue;
      }

      currentState = await btCube.getState();
      if (currentState && originalState && didSolve(originalState, currentState, currentAlg)) {
        console.log("Solved");
        console.log(originalState.stateData)
        console.log(currentState.stateData)
        shouldNextAlg = true;
        continue;
      }

      await (btCube as any).intervalHandler();
    }
  }

  const resetCube = () => shouldReset = true;
  const nextAlg = () => {
    if (btCube) {
      shouldNextAlg = true;
      return;
    }

    setCurrentAlg(getNextAlg(algSheet!));
  }

  const processCubeCommands = () => {
    if (!algSheet || !moveBuffer.isFull()) return;
    const moves = moveBuffer.toArray().join(" ");
    
    if (moves.includes("D' D' D' D'")) {
      setCurrentAlg(getNextAlg(algSheet));
      moveBuffer.clear();
      return;
    }
  }
  
  useEffect(() => {
    if (!btCube) return;

    const cube = btCube as any;
    if (cube.intervalHandle) (btCube as any).stopTrackingMoves();
    handleCubeState();
  });

  if (!algSheet) return <Loading />;

  return (
    <div className="flex h-screen bg-base-300 overflow-y-scroll	overflow-visible">
      <div className="m-auto space-y-3">
        <div className="flex">
          <div className="btn-group content-center m-auto indicator bg-base-100 rounded-lg shadow-xl">
            <button 
              className="btn btn-ghost" 
              aria-label="settings"
            >
              <FontAwesomeIcon icon={faSliders} className="text-2xl" />
            </button>

            <button
              className={`btn btn-ghost ${showCases && "btn-active"}`}
              onClick={() => setShowCases(!showCases)}
              area-label="cases"
            >
              <FontAwesomeIcon icon={faCubes} className="text-2xl" />
            </button>

            <span className="indicator-item badge badge-secondary">450</span>
            <button 
              className="btn btn-ghost"
              aria-label="sorting"
            >
              <FontAwesomeIcon icon={faShuffle} className="text-2xl" />
            </button>
          </div>
        </div>

        <TrainerUI 
          currentAlg={currentAlg}
          retry={resetCube}
          next={nextAlg}
        />

        {showCases && <CaseSelector algSheet={algSheet} />}

        <Footer />
      </div>

      <ConnectionModal
        btCube={btCube}
        setBtCube={setBtCube}
        overrideCube={overrideCube}
        setOverrideCube={setOverrideCube}
      />
    </div>
  );
};
