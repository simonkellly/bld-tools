import { MoveEvent } from "cubing/bluetooth";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { RingBuffer } from "ring-buffer-ts";
import { AudioPlayerContext } from "../context/AudioPlayerContext";
import { BTCubeContext } from "../context/BTCubeContext";
import { CaseContext } from "../context/CaseContext";
import AlgWrapper from "../utils/alg-wrapper";
import { didSolve, KState } from "../utils/cube-utils";

export const BTCubeHandler = () => {
  const [moveBuffer] = useState<RingBuffer<string>>(new RingBuffer(8));
  const btCubeContext = useContext(BTCubeContext);
  const caseContext = useContext(CaseContext);
  const audioContext = useContext(AudioPlayerContext);

  const currentCase = useRef<AlgWrapper | undefined>(undefined);
  const addedListener = useRef(false);
  const shouldResetState = useRef(false);
  const originalState = useRef<KState | undefined>(undefined);

  const processCubeCommands = () => {
    const moves = moveBuffer.toArray().join(" ");
    if (moves.includes("D' D' D' D'")) {
      caseContext.retryCase!();
      moveBuffer.clear();
      audioContext.toSay.push("Reset");
      audioContext.toSay.push("_" + currentCase.current?.case.first + " " + "_" + currentCase.current?.case.second);

      toast("Retrying case", { duration: 2000 });
      return;
    }

    if (moves.includes("D D D D")) {
      caseContext.nextCase!();
      moveBuffer.clear();
      toast("Skipping case", { duration: 2000 });
      return;
    }
  }

  const handleCubeState = async () => {
    const btCube = btCubeContext.btCube;
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
          audioContext.toSay.push("_" + nextCase.case.first + " " + "_" + nextCase.case.second);
          continue;
        }

      } catch (error: any) {
        console.error(error);
        if (error.toString().includes("GATT Server is disconnected")) {
          btCubeContext.setBtCube && btCubeContext.setBtCube(undefined as any);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      await new Promise(resolve => setTimeout(resolve));
    }
  }

  useEffect(() => {
    if (!btCubeContext.btCube) return;
    
    const cube = btCubeContext.btCube as any;
    if (cube.intervalHandle) cube.stopTrackingMoves();
    handleCubeState();
  }, [btCubeContext.btCube]);

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