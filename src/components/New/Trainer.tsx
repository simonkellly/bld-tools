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
import { Loading } from "./Loading";
import { TrainerUI } from "./TrainerUI";

function getNextAlg(algSheet: AlgSheet): AlgWrapper {
  while (true) {
    const first = algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const second = algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
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

  if (!algSheet) return <Loading />;

  return (
    <div className="flex h-screen bg-base-300">
      <div className="m-auto space-y-3">
        <div className="flex">
          <div className="btn-group content-center m-auto indicator bg-base-100 rounded-lg shadow-xl">
            <button className="btn btn-ghost">
              <FontAwesomeIcon icon={faSliders} className="text-2xl" />
            </button>

            <button
              className={`btn btn-ghost ${showCases && "btn-active"}`}
              onClick={() => setShowCases(!showCases)}
            >
              <FontAwesomeIcon icon={faCubes} className="text-2xl" />
            </button>

            <span className="indicator-item badge badge-secondary">450</span>
            <button className="btn btn-ghost">
              <FontAwesomeIcon icon={faShuffle} className="text-2xl" />
            </button>
          </div>
        </div>
        
        <TrainerUI currentAlg={currentAlg}/>

        {showCases && <CaseSelector algSheet={algSheet}/>}
      </div>

      <ConnectionModal />
    </div>
  );
};
