import {
  faSliders,
  faShuffle,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CaseSelector } from "./CaseSelector";
import { ConnectionModal } from "./ConnectionModal";
import { TimerCard } from "./TimerCard";

export const NewTimer = () => {
  const [showCases, setShowCases] = useState(true);

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

        <TimerCard>
          <label className="swap">
            <input type="checkbox" />
            <p className="text-2xl text-center font-semibold swap-on">
              [U D': [D2', R U' R']]
            </p>
            <p className="text-2xl text-center font-semibold swap-off">
              Click To Reveal Solution
            </p>
          </label>
        </TimerCard>
        <TimerCard>
          <p className="text-9xl text-center font-bold">SK</p>
        </TimerCard>

        <TimerCard>
          <div className="space-x-3 items-center text-center">
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-success">Done</button>
            <button className="btn btn-warning">Retry</button>
            <button className="btn btn-error">Next</button>
          </div>
        </TimerCard>

        {showCases && <CaseSelector />}
      </div>

      <ConnectionModal />
    </div>
  );
};
