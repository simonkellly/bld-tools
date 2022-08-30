import { Loading } from "./Loading";
import { ConnectionModal } from "./ConnectionModal";
import { TrainerUI } from "./TrainerUI";
import { useEffect, useState } from "react";
import AlgSheet, { fetchGoogleSheet, SHEET_NAME } from "../utils/alg-sheet";
import { AlgSheetContext } from "../context/AlgSheetContext";
import { CaseContext, CaseProps } from "../context/CaseContext";
import AlgWrapper from "../utils/alg-wrapper";
import { BTCubeHandler } from "./BTCubeHandler";
import { CaseController, CaseControllerProps } from "../utils/case-controller";
import { Toaster } from "react-hot-toast";
import useStorageState from "react-use-storage-state";
import { AudioHandler } from "./AudioHandler";
import { HelpModal } from "./HelpModal";
import { useAudioStore } from "../stores/audio-store";
import { useSettingsStore } from "../stores/settings-store";
import { useNavigate, useParams } from "react-router-dom";

export const Trainer = () => {
  const params = useParams();
  const sheetName = params.sheet || SHEET_NAME;

  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  const [currentCase, setCurrentCase] = useState<AlgWrapper>();
  const [caseController, setCaseController] = useState<CaseController>();
  const [resetListeners] = useState<(() => void)[]>([]);

  const [_, setRender] = useState({});
  const [clicked, setClicked] = useState(false);

  // ============================================================
  const toSay = useAudioStore(store => store.toSay);
  const darkMode = useSettingsStore(store => store.darkMode);

  const forceRender = () => setRender({});

  const handleClick = () => {
    document.removeEventListener('click', handleClick);
    setClicked(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    console.log(sheetName)
    fetchGoogleSheet(sheetName).then(setAlgSheet);
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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  })

  const [storedState, setStoredState] = useStorageState<CaseControllerProps>("case-controller" + sheetName, {});

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
      <AlgSheetContext.Provider value={{ algSheet }}>
          <CaseContext.Provider value={caseContextValue}>
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
          </CaseContext.Provider>
      </AlgSheetContext.Provider>
  );
};
