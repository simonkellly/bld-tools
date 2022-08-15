import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AlgSheetContext } from "../context/AlgSheetContext";
import { CaseContext } from "../context/CaseContext";
import { TrainerCard } from "./TrainerCard";

export const CaseSelector = () => {
  const [renderState, setRenderState] = useState({});
  const caseContext = useContext(CaseContext);

  const controller = caseContext.caseController!;

  const update = () => {
    caseContext.nextCase && caseContext.nextCase();
    setRenderState({});
  }

  const setAll = () => {
    controller.letterStates.forEach(letterState => {
      letterState.selected = true;
    });
    controller.showFavourites = true;
    controller.updatePotentialCases();
    update();
  };

  const setNone = () => {
    controller.letterStates.forEach(letterState => {
      letterState.selected = false;
    });
    controller.showFavourites = false;
    controller.updatePotentialCases();
    update();
  }

  const setInverses = () => {
    controller.allowInverses = !controller.allowInverses;
    controller.updatePotentialCases();
    update();
  }

  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Select Cases To Train
      </p>
      <div className="grid grid-cols-6 gap-4">
        {controller.letterStates!.map((letterState) => (
          <button
            key={letterState.letter}
            className={`btn ${
              letterState.selected ? "btn-success" : "btn-ghost"
            } btn-block`}
            onClick={() => {
              letterState.selected = !letterState.selected;
              controller.updatePotentialCases();
              update();
            }}
          >
            {letterState.letter}
          </button>
        ))}

        <button 
          className={`btn ${
            controller.showFavourites ? "btn-success" : "btn-ghost"
          } btn-block`}
          onClick={() => {
            controller.showFavourites = !controller.showFavourites;
            controller.updatePotentialCases();
            update();
          }}
        >
          <FontAwesomeIcon icon={faStar} className="text-center mb-0.5"/>
        </button>
      </div>
      <div className="space-x-3 items-center text-center pt-3">
        <button 
          className={controller.allowInverses ? "btn btn-success" : "btn btn-error"} 
          onClick={setInverses}
        >
          {controller.allowInverses ? "Inverses Included" : "Inverses Excluded"}
        </button>
        <button className="btn btn-primary" onClick={setNone}>None</button>
        <button className="btn btn-secondary" onClick={setAll}>All</button>
      </div>
    </TrainerCard>
  );
};
