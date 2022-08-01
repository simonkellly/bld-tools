import { useContext } from "react";
import useStorageState from "react-use-storage-state";
import { SettingsContext } from "../context/SettingsContext";
import { TrainerCard } from "./TrainerCard";

export const Settings = () => {
  const settingsContext = useContext(SettingsContext);

  const resetSettings = () => {
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Settings
      </p>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Always Show Solution</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settingsContext.alwaysShowSolution}
            onChange={() => settingsContext.setAlwaysShowSolution!(!settingsContext.alwaysShowSolution)}
          />
        </label>
      </div>

      <br />

      <button className="btn btn-block btn-error" onClick={resetSettings}>Reset Trainer</button>
    </TrainerCard>
  );
};
