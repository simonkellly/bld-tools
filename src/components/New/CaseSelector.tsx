import AlgSheet from "../../utils/alg-sheet";
import { TrainerCard } from "./TrainerCard";

interface CaseSelectorProps {
  algSheet: AlgSheet
}

export const CaseSelector = (props: CaseSelectorProps) => (
  <TrainerCard className="px-3">
    <p className="text-2xl text-center font-semibold swap-on pb-3">
      Select Cases To Train
    </p>
    <div className="grid grid-cols-6 gap-4">
      {props.algSheet.letters.map((letter) => (
        <button
          key={letter}
          className={`btn ${
            Math.random() > 0.5 ? "btn-success" : "btn-ghost"
          } btn-block`}
        >
          {letter}
        </button>
      ))}
    </div>
    <div className="space-x-3 items-center text-center pt-3">
      <button className="btn btn-primary">None</button>
      <button className="btn btn-secondary">All</button>
    </div>
  </TrainerCard>
);