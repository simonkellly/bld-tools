import { FixedSizeArray } from "./type-utils";

export type Sticker = "U" | "D" | "F" | "B" | "L" | "R";

export type EdgeSticker = FixedSizeArray<Sticker, 2>;
export type CornerSticker = FixedSizeArray<Sticker, 3>;

export type Edge = FixedSizeArray<EdgeSticker, 2>;
export type Corner = FixedSizeArray<CornerSticker, 3>;

export const Faces = {
    U: "bg-white",
    L: "bg-orange-500",
    F: "bg-green-500",
    R: "bg-red-500",
    B: "bg-blue-500",
    D: "bg-yellow-400",
}

// Sticker indices for each face
// 0 1 2
// 7 8 3
// 6 5 4
export const LetterScheme = {
    U: ["A", "A", "B", "B", "C", "C", "D", "D", ""],
    F: ["E", "E", "F", "F", "G", "G", "H", "H", ""],
    R: ["I", "I", "J", "J", "K", "K", "L", "L", ""],
    B: ["M", "M", "N", "N", "O", "O", "P", "P", ""],
    L: ["Q", "Q", "R", "R", "S", "S", "T", "T", ""],
    D: ["U", "U", "V", "V", "W", "W", "X", "X", ""],
}
const letterSchemeStorageKey = "letterScheme";
let localLetterScheme = LetterScheme;

function convertL2RIndex(index: number){
  let newIndex = index;
    switch (index) {
        case 0: break;
        case 1: break;
        case 2: break;
        case 3: newIndex = 7; break;
        case 4: newIndex = 8; break;
        case 5: newIndex = 3; break;
        case 6: newIndex = 6; break;
        case 7: newIndex = 5; break;
        case 8: newIndex = 4; break;
        default: break;
    }
    return newIndex;
}

function setLetterSchemeFromStorage() {
    try {
        localStorage.setItem(letterSchemeStorageKey, JSON.stringify(LetterScheme));
        localLetterScheme = LetterScheme;
    } catch (error) {
        
    }
}

function getLetterSchemeFromStorage() {
    try {
        const scheme = localStorage.getItem(letterSchemeStorageKey);
        if (scheme == null) return;
        localLetterScheme = JSON.parse(scheme);
    } catch (error) {
        
    }
}

export function getLetterLeftToRight(face: Sticker, index: number): string {
    const newIndex = convertL2RIndex(index);
    return getLetterLogical(face, newIndex);
}

export function setLetterLeftToRight(face: Sticker, index: number, letter: string) {
    const newIndex = convertL2RIndex(index);
    setLetterLogical(face, newIndex, letter);
}

export function getLetterLogical(face: Sticker, index: number): string {
    try {
        getLetterSchemeFromStorage();
        return localLetterScheme[face][index];
    } catch (error) {
        return LetterScheme[face][index];
    }
    
}

export function setLetterLogical(face: Sticker, index: number, letter: string) {
    localLetterScheme[face][index] = letter;
    LetterScheme[face][index] = letter;
    setLetterSchemeFromStorage();
}

export function getLetterColor(letter: string): string {
    if (localLetterScheme.U.includes(letter)) return Faces.U;
    if (localLetterScheme.F.includes(letter)) return Faces.F;
    if (localLetterScheme.R.includes(letter)) return Faces.R;
    if (localLetterScheme.B.includes(letter)) return Faces.B;
    if (localLetterScheme.L.includes(letter)) return Faces.L;
    if (localLetterScheme.D.includes(letter)) return Faces.D;
    return "";
  }