import { Loading } from "./Loading";
import { ConnectionModal } from "./ConnectionModal";
import { TrainerUI } from "./TrainerUI";
import { BluetoothPuzzle } from "cubing/bluetooth";
import { useEffect, useState } from "react";
import AlgSheet, { fetchGoogleSheet } from "../utils/alg-sheet";
import { AlgSheetContext } from "../context/AlgSheetContext";
import { BTCubeContext } from "../context/BTCubeContext";
import { CaseContext, CaseProps } from "../context/CaseContext";
import AlgWrapper from "../utils/alg-wrapper";
import { BTCubeHandler } from "./BTCubeHandler";
import { CaseController, CaseControllerProps } from "../utils/case-controller";
import { Toaster } from "react-hot-toast";
import useStorageState from "react-use-storage-state";
import { SettingsContext, SettingsProps } from "../context/SettingsContext";
import { AudioHandler } from "./AudioHandler";
import { AudioPlayerContext, AudioPlayerProps } from "../context/AudioPlayerContext";
import { HelpModal } from "./HelpModal";

export const Trainer = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [btCube, setBtCube] = useState<BluetoothPuzzle>();
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  const [currentCase, setCurrentCase] = useState<AlgWrapper>();
  const [caseController, setCaseController] = useState<CaseController>();
  const [resetListeners] = useState<(() => void)[]>([]);
  const [showSolution, setShowSolution] = useStorageState("showSolution", false);
  const [darkMode, setDarkMode] = useStorageState("darkMode", false);
  const [ttsEnabled, setTtsEnabled] = useStorageState("tts", false);
  const [ttsVolume, setTtsVolume] = useStorageState("ttsVolume", 50);

  const [_, setRender] = useState({});
  const [clicked, setClicked] = useState(false);

  const forceRender = () => setRender({});

  const handleClick = () => {
    document.removeEventListener('click', handleClick);
    setClicked(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    
  }, []);

  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  const nextCase = () => {
    caseController && setCurrentCase(caseController.getNextCase());
  }

  const doneCase = () => {
    caseController && setCurrentCase(caseController.getNextCase(currentCase));
  }

  const resetCases = () => {
    caseController && caseController.updatePotentialCases();
    nextCase();
  }

  const caseContextValue: CaseProps = {
    caseController: caseController,
    currentCase: currentCase,
    setCurrentCase: setCurrentCase,
    resetCases: resetCases,
    completeCase: doneCase,
    retryCase: () => {
      resetListeners.forEach(resetListener => {
        try {
          resetListener();
        } catch (error) {
          console.error(error);
        }
      });
    },
    nextCase: nextCase,
    addRetryListener: (resetListener: () => void) => resetListeners.push(resetListener),
  }

  const settingsContextValue: SettingsProps = {
    helpOpen: helpOpen,
    setHelpOpen: setHelpOpen,
    alwaysShowSolution: showSolution,
    setAlwaysShowSolution: setShowSolution,
    darkMode: darkMode,
    setDarkMode: setDarkMode,
    ttsEnabled: ttsEnabled,
    setTtsEnabled: setTtsEnabled,
    volume: ttsVolume,
    setVolume: setTtsVolume,
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  })

  const [toSay, setToStay] = useState<string[]>([]);

  const audioContextValue: AudioPlayerProps = {
    toSay: toSay
  }

  const [storedState, setStoredState] = useStorageState<CaseControllerProps>("case-controller", {});

  useEffect(() => {
    if (!algSheet) return;
    const controller = new CaseController(algSheet, storedState, setStoredState);
    controller.onUpdateCases = (wasEmpty) => {
      forceRender();
      if (wasEmpty) toSay.push("Finished");
    };
    setCaseController(controller);
    setCurrentCase(controller.getNextCase());
  }, [algSheet]);

  if (!algSheet || !currentCase) return <Loading />;
  return (
    <SettingsContext.Provider value={settingsContextValue}>
      <AlgSheetContext.Provider value={{ algSheet }}>
        <BTCubeContext.Provider value={{ btCube, setBtCube }}>
          <CaseContext.Provider value={caseContextValue}>
            <AudioPlayerContext.Provider value={audioContextValue}>
              {clicked && <AudioHandler />}
              <BTCubeHandler/>
              <div className="flex h-screen bg-base-300 overflow-y-scroll	overflow-visible">
                <div className="m-auto space-y-3">
                  <Toaster/>
                  <TrainerUI />
                </div>
                <HelpModal />
                <ConnectionModal />
              </div>
            </AudioPlayerContext.Provider>
          </CaseContext.Provider>
        </BTCubeContext.Provider>
      </AlgSheetContext.Provider>
    </SettingsContext.Provider>
  );
};
