import { MoveEvent } from "cubing/bluetooth";
import { useContext, useEffect, useRef, useState } from "react";
import { RingBuffer } from "ring-buffer-ts";
import { BTCubeContext } from "../context/BTCubeContext";
import { CaseContext } from "../context/CaseContext";
import AlgWrapper from "../utils/alg-wrapper";
import { didSolve, KState } from "../utils/cube-utils";

export const BTCubeHandler = () => {
  const [moveBuffer] = useState<RingBuffer<string>>(new RingBuffer(8));
  const btCubeContext = useContext(BTCubeContext);
  const caseContext = useContext(CaseContext);

  const currentCase = useRef<AlgWrapper | undefined>(undefined);
  const addedListener = useRef(false);
  const shouldResetState = useRef(false);
  const originalState = useRef<KState | undefined>(undefined);

  const processCubeCommands = () => {
    const moves = moveBuffer.toArray().join(" ");
    if (moves.includes("D' D' D' D'")) {
      caseContext.retryCase!();
      moveBuffer.clear();
      return;
    }

    if (moves.includes("D D D D")) {
      caseContext.nextCase!();
      moveBuffer.clear();
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
        }

        if (currentState && 
            originalState && 
            currentCase.current && 
            didSolve(originalState.current, currentState, currentCase.current!)) {
          caseContext.nextCase!();
          originalState.current = currentState;
          continue;
        }

      } catch (error) {
        console.error(error);
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