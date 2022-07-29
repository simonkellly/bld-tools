import { TrainerCard } from "./TrainerCard";

export const TrainerUI = () => {
  return (
    <>
      <TrainerCard>
        <label className="swap">
          <input type="checkbox" />
          <p className="text-2xl text-center font-semibold swap-on">
            [U D': [D2', R U' R']]
          </p>
          <p className="text-2xl text-center font-semibold swap-off">
            Click To Reveal Solution
          </p>
        </label>
      </TrainerCard>

      <TrainerCard>
        <p className="text-9xl text-center font-bold">SK</p>
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
