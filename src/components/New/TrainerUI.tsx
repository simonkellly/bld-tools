import {
  faSliders,
  faShuffle,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CaseSelector } from "./CaseSelector";
import { ConnectionModal } from "./ConnectionModal";
import { Trainer } from "./Trainer";

export const TrainerUI = () => {
  const [showCases, setShowCases] = useState(false);

  return (
    <div className="flex h-screen bg-base-300">
      <div className="m-auto space-y-3">
        <div className="flex">
          <div className="btn-group content-center m-auto indicator bg-base-100 rounded-lg">
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
        
        <Trainer/>

        {showCases && <CaseSelector />}
      </div>

      <ConnectionModal />
    </div>
  );
};
