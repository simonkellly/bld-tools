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

function getNextAlg(algSheet: AlgSheet): AlgWrapper {
  while (true) {
    const first =
      algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const second =
      algSheet.letters[Math.floor(Math.random() * algSheet.letters.length)];
    const alg = algSheet.getAlg(first, second);
    if (alg != undefined) return alg;
  }
}

export const Trainer = () => {
  const [btCube, setBtCube] = useState<BluetoothPuzzle>();
  const [algSheet, setAlgSheet] = useState<AlgSheet>();
  const [currentCase, setCurrentCase] = useState<AlgWrapper>();
  const [resetListeners] = useState<(() => void)[]>([]);

  useEffect(() => {
    fetchGoogleSheet().then(setAlgSheet);
  }, []);

  const nextCase = () => {
    algSheet && setCurrentCase(getNextAlg(algSheet));
  }

  const caseContextValue: CaseProps = {
    currentCase: currentCase,
    setCurrentCase: setCurrentCase,
    resetCases: nextCase,
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
    addResetListener: (resetListener: () => void) => resetListeners.push(resetListener),
  }

  useEffect(() => {
    if (!algSheet) return;
    setCurrentCase(getNextAlg(algSheet));
  }, [algSheet]);

  if (!algSheet) return <Loading />;
  return (
    <AlgSheetContext.Provider value={{ algSheet }}>
      <BTCubeContext.Provider value={{ btCube, setBtCube }}>
        <CaseContext.Provider value={caseContextValue}>
          <BTCubeHandler/>
          <div className="flex h-screen bg-base-300 overflow-y-scroll	overflow-visible">
            <div className="m-auto space-y-3">
              <TrainerUI />
            </div>
            <ConnectionModal />
          </div>
        </CaseContext.Provider>
      </BTCubeContext.Provider>
    </AlgSheetContext.Provider>
  );
};
