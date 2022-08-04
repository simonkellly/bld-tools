import { Alg } from "cubing/alg";
import AlgWrapper from "./alg-wrapper";

export function stateEquals(a: number[], b: number[]): boolean {
  if (a == null || b == null) return false;
  if (a == undefined || b == undefined) return false;

  if (a.length !== b.length) return false;
  if (a.length < 4 || b.length < 4) return false;
  
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  
  return true;
}

export interface KState {
  stateData: Record<string, {
    pieces: number[]
    orientation: number[]
  }>
  applyAlg(alg: Alg | string): KState;
}

export function didSolve(initialState: KState, currentState: KState, alg: AlgWrapper): boolean {
  const toCheck = currentState.applyAlg(alg.alg.invert());

  const oldCorners = initialState.stateData.CORNERS;
  const newCorners = toCheck.stateData.CORNERS;

  const oldEdges = initialState.stateData.EDGES;
  const newEdges = toCheck.stateData.EDGES;

  return stateEquals(oldCorners.orientation, newCorners.orientation) &&
         stateEquals(oldCorners.pieces, newCorners.pieces) &&
         stateEquals(oldEdges.orientation, newEdges.orientation) &&
         stateEquals(oldEdges.pieces, newEdges.pieces);
}