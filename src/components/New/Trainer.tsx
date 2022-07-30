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
import { BluetoothPuzzle } from "cubing/bluetooth";

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

  const updateCubeState = async () => {
    while (true) {
      await (btCube as any).intervalHandler();
    }
  }

  useEffect(() => {
    if (!btCube) return;
    btCube.addMoveListener((move) => console.log(move));
    (btCube as any).stopTrackingMoves();
    updateCubeState();
  }, [btCube]);

  if (!algSheet) return <Loading />;

  return (
    <div className="flex h-screen bg-base-300">
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

        <TrainerUI currentAlg={currentAlg} />

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
