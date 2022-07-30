import {
  faCubes,
  faShuffle,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CaseSelector } from "./CaseSelector";
import { Footer } from "./Footer";
import { CaseViewer } from "./CaseViewer";

export const TrainerUI = () => {
  const [showCaseSelector, setShowCaseSelector] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="btn-group content-center m-auto indicator bg-base-100 rounded-lg shadow-xl">
          <button className="btn btn-ghost" aria-label="settings">
            <FontAwesomeIcon icon={faSliders} className="text-2xl" />
          </button>

          <button
            className={`btn btn-ghost ${showCaseSelector && "btn-active"}`}
            onClick={() => setShowCaseSelector(!showCaseSelector)}
            area-label="cases"
          >
            <FontAwesomeIcon icon={faCubes} className="text-2xl" />
          </button>

          <span className="indicator-item badge badge-secondary">450</span>
          <button className="btn btn-ghost" aria-label="sorting">
            <FontAwesomeIcon icon={faShuffle} className="text-2xl" />
          </button>
        </div>
      </div>

      <CaseViewer />

      {showCaseSelector && <CaseSelector />}

      {!showCaseSelector && <Footer />}
    </>
  );
};