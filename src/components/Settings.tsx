import { TrainerCard } from "./TrainerCard";

export const Settings = () => {
  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Settings
      </p>

      <button className="btn btn-block btn-primary">Apply Settings</button>

    </TrainerCard>
  );
};
