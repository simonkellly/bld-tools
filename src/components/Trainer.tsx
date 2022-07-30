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

export const Trainer = () => {
  const [btCube, setBtCube] = useState<BluetoothPuzzle>();
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  const [currentCase, setCurrentCase] = useState<AlgWrapper>();
  const [caseController, setCaseController] = useState<CaseController>();
  const [resetListeners] = useState<(() => void)[]>([]);
  const [render, setRender] = useState({});

  const forceRender = () => setRender({});

  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  const nextCase = () => {
    caseController && setCurrentCase(caseController.getNextCase());
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
    completeCase: nextCase,
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

  const [storedState, setStoredState] = useStorageState<CaseControllerProps>("case-controller", {});

  useEffect(() => {
    if (!algSheet) return;
    const controller = new CaseController(algSheet, storedState, setStoredState);
    controller.onUpdateCases = forceRender;
    setCaseController(controller);
    setCurrentCase(controller.getNextCase());
  }, [algSheet]);

  if (!algSheet || !currentCase) return <Loading />;
  return (
    <AlgSheetContext.Provider value={{ algSheet }}>
      <BTCubeContext.Provider value={{ btCube, setBtCube }}>
        <CaseContext.Provider value={caseContextValue}>
          <BTCubeHandler/>
          <div className="flex h-screen bg-base-300 overflow-y-scroll	overflow-visible">
            <div className="m-auto space-y-3">
              <Toaster/>
              <TrainerUI />
            </div>
            <ConnectionModal />
          </div>
        </CaseContext.Provider>
      </BTCubeContext.Provider>
    </AlgSheetContext.Provider>
  );
};
