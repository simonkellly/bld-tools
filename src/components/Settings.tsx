import { TrainerCard } from "./TrainerCard";

export const Settings = () => {
  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Settings
      </p>
      <div className="space-x-3 items-center text-center pt-3">
        <button className="btn btn-primary">None</button>
        <button className="btn btn-secondary">All</button>
      </div>
    </TrainerCard>
  );
}