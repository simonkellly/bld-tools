import { useState } from "react";
import AlgWrapper from "../../utils/alg-wrapper";
import { TrainerCard } from "./TrainerCard";

interface TrainerUIProps {
  currentAlg?: AlgWrapper;
}

export const TrainerUI = (props: TrainerUIProps) => {
  const [showAlg, setShowAlg] = useState(false);
  const algString = props.currentAlg ? props.currentAlg.string : "MISSING";
  const caseString = props.currentAlg
    ? props.currentAlg.case.first + props.currentAlg.case.second
    : "BLD";


  let timeout: NodeJS.Timeout | undefined;
  const showAlgOnEnter = () => timeout = setTimeout(() => setShowAlg(true), 200);
  const hideAlgOnLeave = () => {
    timeout && clearTimeout(timeout);
    setShowAlg(false);
  }

  return (
    <>
      <TrainerCard className="overflow-visible">
        <div
          className={(showAlg && "tooltip") || ""}
          data-tip={props.currentAlg?.expanded}
        >
          <p
            className="text-2xl text-center font-semibold"
            onMouseEnter={showAlgOnEnter}
            onMouseLeave={hideAlgOnLeave}
          >
            {(showAlg && algString) || "Hover Over To Reveal Solution"}
          </p>
        </div>
      </TrainerCard>

      <TrainerCard>
        <p className="text-9xl text-center font-bold">{caseString}</p>
      </TrainerCard>

      <TrainerCard>
        <div className="space-x-3 items-center text-center">
          <button className="btn btn-primary">
            <span className="px-1">Reset</span>
          </button>
          <button className="btn btn-success">
            <span className="px-1">Done</span>
          </button>
          <button className="btn btn-warning">
            <span className="px-1">Retry</span>
          </button>
          <button className="btn btn-error">
            <span className="px-1">Next</span>
          </button>
        </div>
      </TrainerCard>
    </>
  );
};
