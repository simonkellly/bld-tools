import { ChangeEvent, useState } from "react";
import { Button, Modal } from "react-daisyui";
import {
  Faces,
  getLetterLeftToRight,
  setLetterLeftToRight,
  Sticker,
} from "../utils/cube";

interface StickerButtonProps {
  color: string;
  text: string;
  onClick: () => void;
}

const StickerButton = (props: StickerButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn text-black btn-block aspect-square bg-${props.color} border-0`}
    >
      {props.text}
    </button>
  );
};

export interface LetterSchemeEditorProps {
  text: string
}

export const LetterSchemeEditor = (props: LetterSchemeEditorProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [face, setFace] = useState<Sticker>("U");
  const [index, setIndex] = useState<number>(-1);
  const [value, setValue] = useState("");

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const setNewIndex = (newIndex: number) => {
    setIndex(newIndex);
    setValue(getLetterLeftToRight(face, newIndex));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLetterLeftToRight(face, index, e.target.value);
    console.log("SET LETTER", face, index, e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Button onClick={toggleVisible} className="btn-primary">{props.text}</Button>
      <Modal open={visible} className="w-auto p- content-center">
        <h1 className="text-xl text-center font-bold pb-4">
          Select Face To Edit
        </h1>
        <div className="grid grid-cols-4 gap-1 p-0">
          <div />
          <StickerButton
            onClick={() => setFace("U")}
            color={Faces.U}
            text="U"
          />
          <div />
          <div />
          <StickerButton
            onClick={() => setFace("L")}
            color={Faces.L}
            text="L"
          />
          <StickerButton
            onClick={() => setFace("F")}
            color={Faces.F}
            text="F"
          />
          <StickerButton
            onClick={() => setFace("R")}
            color={Faces.R}
            text="R"
          />
          <StickerButton
            onClick={() => setFace("B")}
            color={Faces.B}
            text="B"
          />
          <div />
          <StickerButton
            onClick={() => setFace("D")}
            color={Faces.D}
            text="D"
          />
          <div />
          <div />
        </div>
        <div className="divider" />
        <div className="grid grid-cols-3 gap-1 p-0">
          {[...Array(9)].map((x, i) => (
            <StickerButton
              key={i}
              onClick={() => setNewIndex(i)}
              color={Faces[face]}
              text={getLetterLeftToRight(face, i)}
            />
          ))}
        </div>
        <div className="pt-5">
          {index >= 0 && (
            <input
              type="text"
              value={value}
              placeholder="Enter New Letter"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={handleChange}
            />
          )}
        </div>
        <div className="modal-action">
          <Button onClick={toggleVisible}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};
