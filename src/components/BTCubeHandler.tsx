import { MoveEvent } from "cubing/bluetooth";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { RingBuffer } from "ring-buffer-ts";
import { CaseContext } from "../context/CaseContext";
import { useAudioStore } from "../stores/audio-store";
import { useBTCubeStore } from "../stores/bt-cube-store";
import AlgWrapper from "../utils/alg-wrapper";
import { didSolve, KState } from "../utils/cube-utils";

export const BTCubeHandler = () => {
  const [moveBuffer] = useState<RingBuffer<string>>(new RingBuffer(8));
  const caseContext = useContext(CaseContext);

  const toSay = useAudioStore((store) => store.toSay);
  const btCube = useBTCubeStore((store) => store.btCube);
  const setBtCube = useBTCubeStore((store) => store.setBtCube);

  const currentCase = useRef<AlgWrapper | undefined>(undefined);
  const addedListener = useRef(false);
  const shouldResetState = useRef(false);
  const originalState = useRef<KState | undefined>(undefined);

  const processCubeCommands = () => {
    const moves = moveBuffer.toArray().join(" ");
    if (moves.includes("D' D' D' D'")) {
      caseContext.retryCase!();
      moveBuffer.clear();
      toSay.push("Reset");
      toSay.push("_" + currentCase.current?.case.first + " " + "_" + currentCase.current?.case.second);
      toast("Retrying case", { duration: 2000 });
      return;
    }

    if (moves.includes("D D D D")) {
      const nextCase = caseContext.caseController!.getNextCase();
      caseContext.setCurrentCase!(nextCase);
      moveBuffer.clear();
      toast("Skipping case", { duration: 2000 });
      toSay.push("Skipping");
      toSay.push("_" + nextCase.case.first + " " + "_" + nextCase.case.second);
      return;
    }

    if (moves.includes("D' D D' D")) {
      const hint = currentCase.current?.expanded?.split(" ")[0]!;
      moveBuffer.clear();
      toast(`Hint: ${hint}`, { duration: 2000 });
      toSay.push(hint + "_");
      
      return;
    }
  }

  const handleCubeState = async () => {
    const cube = btCube as any;

    btCube!.addMoveListener((move: MoveEvent) => {
      moveBuffer.add(move.latestMove.toString());
      processCubeCommands();
    });

    while (true) {
      if (!btCube) {
        await new Promise(resolve => setTimeout(resolve));
        continue;
      }

      try {
        await cube.intervalHandler();
        const currentState = await btCube.getState();

        if (!originalState.current || shouldResetState.current) {
          originalState.current = currentState;
          shouldResetState.current = false;
          continue;
        }

        if (currentState && 
            originalState && 
            currentCase.current && 
            didSolve(originalState.current, currentState, currentCase.current!)) {
          const nextCase = caseContext.caseController!.getNextCase!(currentCase.current);
          caseContext.setCurrentCase!(nextCase);
          originalState.current = currentState;
          toSay.push("_" + nextCase.case.first + " " + "_" + nextCase.case.second);
          continue;
        }

      } catch (error: any) {
        console.error(error);
        if (error.toString().includes("GATT Server is disconnected")) {
          setBtCube(null);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      await new Promise(resolve => setTimeout(resolve));
    }
  }

  useEffect(() => {
    if (!btCube) return;
    
    const cube = btCube as any;
    if (cube.intervalHandle) cube.stopTrackingMoves();
    handleCubeState();
  }, [btCube]);

  useEffect(() => {
    if (!caseContext?.addRetryListener || addedListener.current) return;
    caseContext.addRetryListener!(() => {
      shouldResetState.current = true;
    })
    addedListener.current = true;
  }, []);

  useEffect(() => {
    shouldResetState.current = true;
    currentCase.current = caseContext.currentCase
  }, [caseContext.currentCase]);

  return <></>
}