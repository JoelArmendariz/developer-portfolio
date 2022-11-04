import { useState } from "react";
import useKeyboardKeyRefs from "./useKeyboardKeyRefs";
import useKeyboardKeyAnimations from "./useKeyboardKeyAnimations";

export enum Keys {
  backquote = "backquote",
  keyA = "keyA",
  keyZ = "keyZ",
  tab = "tab",
  keyQ = "keyQ",
  capsLock = "capsLock",
  shiftLeft = "shiftLeft",
  space = "space",
  controlLeft = "controlLeft",
  altLeft = "altLeft",
  altRight = "altRight",
  controlRight = "controlRight",
  backslash = "backslash",
  backspace = "backspace",
  enter = "enter",
  shiftRight = "shiftRight",
  digit1 = "digit1",
  digit2 = "digit2",
  digit3 = "digit3",
  digit4 = "digit4",
  digit5 = "digit5",
  digit6 = "digit6",
  digit7 = "digit7",
  digit8 = "digit8",
  digit9 = "digit9",
  digit0 = "digit0",
  minus = "minus",
  equal = "equal",
  keyS = "keyS",
  keyD = "keyD",
  keyF = "keyF",
  keyG = "keyG",
  keyH = "keyH",
  keyJ = "keyJ",
  keyK = "keyK",
  keyL = "keyL",
  semicolon = "semicolon",
  quote = "quote",
  keyX = "keyX",
  keyC = "keyC",
  keyV = "keyV",
  keyB = "keyB",
  keyN = "keyN",
  keyM = "keyM",
  comma = "comma",
  period = "period",
  slash = "slash",
  keyW = "keyW",
  keyE = "keyE",
  keyR = "keyR",
  keyT = "keyT",
  keyY = "keyY",
  keyU = "keyU",
  keyI = "keyI",
  keyO = "keyO",
  keyP = "keyP",
  bracketLeft = "bracketLeft",
  bracketRight = "bracketRight",
}

const useKeyboard = () => {
  const [isKeyPressed, setIsKeyPressed] = useState<Record<Keys, boolean>>(
    Object.keys(Keys).reduce(
      (acc, keyName) => ({
        ...acc,
        [keyName]: false,
      }),
      {} as Record<Keys, boolean>
    )
  );

  const refs = useKeyboardKeyRefs();
  const positions = useKeyboardKeyAnimations(isKeyPressed);

  const handleKeypress = (action: "UP" | "DOWN", key: string) => {
    const lowerCaseKey = `${key[0].toLowerCase()}${key.substring(1)}`;
    setIsKeyPressed((prevState) => ({
      ...prevState,
      [lowerCaseKey]: action === "DOWN",
    }));
  };

  const playAnimation = () => {
    const keySeries = [
      Keys.keyH,
      Keys.keyE,
      Keys.keyL,
      Keys.keyL,
      Keys.keyO,
      Keys.space,
      Keys.keyW,
      Keys.keyO,
      Keys.keyR,
      Keys.keyL,
      Keys.keyD,
    ];

    let keyIndex = 0;

    const typingInterval = setInterval(() => {
      if (keyIndex || keyIndex === keySeries.length) {
        handleKeypress("UP", keySeries[keyIndex - 1]);
      }
      if (keyIndex === keySeries.length) {
        clearInterval(typingInterval);
      }
      handleKeypress("DOWN", keySeries[keyIndex]);
      keyIndex++;
    }, 200);
  };

  const keys = Object.keys(Keys).reduce((acc, keyName) => {
    return {
      ...acc,
      [keyName]: {
        ref: (refs as any)[`${keyName}Ref`],
        position: (positions as any)[`${keyName}Position`],
        isPressed: (isKeyPressed as any)[keyName],
        setIsPressed: (isKeyPressed as any)[keyName],
      },
    };
  }, {} as Record<Keys, any>);

  const getRefAndPosition = (keyName: Keys) => ({
    ref: keys[keyName].ref,
    position: keys[keyName].position,
  });

  return {
    handleKeypress,
    getRefAndPosition,
    playAnimation,
  };
};

export default useKeyboard;
