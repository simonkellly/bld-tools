import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSettingsStore } from "../stores/settings-store";
import { TrainerCard } from "./TrainerCard";

export const Settings = () => {
  const openHelp = useSettingsStore(state => state.openHelp);
  
  const darkMode = useSettingsStore(state => state.darkMode);
  const toggleDarkMode = useSettingsStore(state => state.toggleDarkMode);
  
  const showSolution = useSettingsStore(state => state.showSolution);
  const toggleShowSolution = useSettingsStore(state => state.toggleShowSolution);
  
  const hideFavourite = useSettingsStore(state => state.hideFavourite);
  const toggleHideFavourite = useSettingsStore(state => state.toggleHideFavourite);
  
  const tts = useSettingsStore(state => state.tts);
  const toggleTts = useSettingsStore(state => state.toggleTts);
  
  const volume = useSettingsStore(state => state.volume);
  const setVolume = useSettingsStore(state => state.setVolume);
  
  const navigate = useNavigate();

  const nav = (path: string) => {
    navigate(path);
    location.reload();
  }

  const resetSettings = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <TrainerCard className="px-3">
      <p className="text-2xl text-center font-semibold swap-on pb-3">
        Settings
      </p>

      <button className="btn gap-2" onClick={openHelp}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        About BLD Tools
      </button>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="btn btn-primary btn-block w-full " onClick={() => nav("/UFR Corners/")}>
          UFR Corners
        </button>

        <button className="btn btn-primary btn-block w-full " onClick={() => nav("/UF Edges/")}>
          UF Edges
        </button>
      </div>
      

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Dark mode</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Always show solution</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={showSolution}
            onChange={toggleShowSolution}
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Hide favourite button</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={hideFavourite}
            onChange={toggleHideFavourite}
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text">Say case with TTS</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={tts}
            onChange={toggleTts}
          />
        </label>

        {tts && (
          <>
            <label className="label">
              <span className="label-text">TTS volume</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) =>
                setVolume(parseInt(e.target.value))
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
