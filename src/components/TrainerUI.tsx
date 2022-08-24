import {  faCubes,
  faRepeat,
  faShuffle,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CaseSelector } from "./CaseSelector";
import { Footer } from "./Footer";
import { CaseViewer } from "./CaseViewer";
import { CaseContext } from "../context/CaseContext";
import { Settings } from "./Settings";

export const TrainerUI = () => {
  const [showCaseSelector, setShowCaseSelector] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const caseContext = useContext(CaseContext);
  const controller = caseContext.caseController!;
  const [_, setRenderState] = useState({});

  const toggleMultiple = () => {
    controller.allowMultiple = !controller.allowMultiple;
    controller.updatePotentialCases();
    caseContext.nextCase && caseContext.nextCase();
    setRenderState({});
  }

  const toggleCaseSelector = () => {
    if (!showCaseSelector) setShowSettings(false);
    setShowCaseSelector(!showCaseSelector);
  }

  const toggleSettings = () => {
    if (!showSettings) setShowCaseSelector(false);
    setShowSettings(!showSettings);
  }

  return (
    <>
      <div className="flex">
        <div className="btn-group content-center m-auto indicator bg-base-100 rounded-lg shadow-xl">
        <button
            className={`btn btn-ghost ${showSettings && "btn-active"}`}
            onClick={toggleSettings}
            area-label="settings"
          >
            <FontAwesomeIcon icon={faSliders} className="text-2xl" />
          </button>

          <button
            className={`btn btn-ghost ${showCaseSelector && "btn-active"}`}
            onClick={toggleCaseSelector}
            area-label="cases"
          >
            <FontAwesomeIcon icon={faCubes} className="text-2xl" />
          </button>

          {<span className="indicator-item badge badge-primary">{controller.remainingCases.length}</span>}
          <button className="btn btn-ghost" aria-label="sorting" onClick={toggleMultiple}>
            <FontAwesomeIcon icon={controller.allowMultiple ? faShuffle : faRepeat} className="text-2xl" />
          </button>
        </div>
      </div>

      <CaseViewer />

      {showCaseSelector && <CaseSelector />}

      {showSettings && <Settings />}

      {!showCaseSelector && !showSettings && <Footer />}
    </>
  );
};