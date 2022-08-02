import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import useStorageState from "react-use-storage-state";
import { SettingsContext } from "../context/SettingsContext";
import { TrainerCard } from "./TrainerCard";

export const Settings = () => {
  const settingsContext = useContext(SettingsContext);

  const resetSettings = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Settings
      </p>

      <button className="btn gap-2" onClick={() => settingsContext.setHelpOpen!(true)}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        About BLD Tools
      </button>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Dark mode</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settingsContext.darkMode}
            onChange={() =>
              settingsContext.setDarkMode!(!settingsContext.darkMode)
            }
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Always show solution</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settingsContext.alwaysShowSolution}
            onChange={() =>
              settingsContext.setAlwaysShowSolution!(
                !settingsContext.alwaysShowSolution
              )
            }
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Say case with TTS</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settingsContext.ttsEnabled}
            onChange={() =>
              settingsContext.setTtsEnabled!(!settingsContext.ttsEnabled)
            }
          />
        </label>

        {settingsContext.ttsEnabled && (
          <>
            <label className="label">
              <span className="label-text">TTS volume</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={settingsContext.volume}
              onChange={(e) =>
                settingsContext.setVolume!(parseInt(e.target.value))
              }
              className="range range-xs range-primary"
            />
          </>
        )}
      </div>

      <br />

      <button className="btn btn-block btn-error" onClick={resetSettings}>
        Reset Trainer
      </button>
    </TrainerCard>
  );
};
