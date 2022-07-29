import { TrainerCard } from "./TrainerCard";

export const Trainer = () => {
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
        <div className="space-x-6 items-center text-center">
          <button className="btn btn-primary">Reset</button>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-warning">Retry</button>
          <button className="btn btn-error">Next</button>
        </div>
      </TrainerCard>
    </>
  );
};
