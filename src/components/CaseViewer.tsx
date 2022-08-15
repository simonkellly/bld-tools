import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { CaseContext } from "../context/CaseContext";
import { SettingsContext } from "../context/SettingsContext";
import { TrainerCard } from "./TrainerCard";

export const CaseViewer = () => {
  const [showAlg, setShowAlg] = useState(false);
  const settingsContext = useContext(SettingsContext);
  const caseContext = useContext(CaseContext);
  const currentAlg = caseContext.currentCase!;


  const algString = currentAlg ? currentAlg.string : "MISSING";
  const caseString = currentAlg
    ? currentAlg.case.first + currentAlg.case.second
    : "BLD";


  let timeout: NodeJS.Timeout | undefined;
  const showAlgOnEnter = () => timeout = setTimeout(() => setShowAlg(true), 300);
  const hideAlgOnLeave = () => {
    timeout && clearTimeout(timeout);
    setShowAlg(false);
  }

  useEffect(() => {
    const handleDown = (e: KeyboardEvent) => {
      if (e.key == " ") {
        e.preventDefault();
        setShowAlg(true);
      }
    };

    const handleUp = (e: KeyboardEvent) => {
      if (e.key == " ") {
        e.preventDefault();
        setShowAlg(false);
      }
    }
  
    document.body.addEventListener('keydown', handleDown);
    document.body.addEventListener('keyup', handleUp);

    return () => {
      document.body.removeEventListener('keydown', handleDown);
      document.body.removeEventListener('keyup', handleUp);
    };
  }, []);
  
  const shouldShowAlg = showAlg || (settingsContext && settingsContext.alwaysShowSolution);

  return (
    <>
      <TrainerCard 
        className="overflow-visible select-none"
        onMouseEnter={showAlgOnEnter}
        onMouseLeave={hideAlgOnLeave}
      >
        <div
          className={(shouldShowAlg && "tooltip") || ""}
          data-tip={currentAlg?.expanded}
        >
          <p
            className="text-2xl text-center font-semibold"
          >
            {(shouldShowAlg && algString) || "Hover Over To Reveal Solution"}
          </p>
        </div>
      </TrainerCard>

      <TrainerCard className="select-none">
        <div className="card-actions justify-end">
          <button className={`btn btn-square mr-2.5`}>
            <FontAwesomeIcon icon={faStar} className="text-center" />
          </button>
        </div>
        <p className="text-9xl text-center font-bold">{caseString}</p>
      </TrainerCard>

      <TrainerCard>
        <div className="space-x-2 items-center text-center">
          <button className="btn btn-primary" onClick={caseContext.resetCases}>
            <span className="px-1">Reset</span>
          </button>
          <button className="btn btn-success" onClick={caseContext.completeCase}>
            <span className="px-1">Done</span>
          </button>
          <button className="btn btn-warning" onClick={caseContext.retryCase}>
            <span className="px-1">Retry</span>
          </button>
          <button className="btn btn-error" onClick={caseContext.nextCase}>
            <span className="px-1">Next</span>
          </button>
        </div>
      </TrainerCard>
    </>
  );
};
