import { useSpring, config } from "@react-spring/three";

const useKeyboardKeyAnimations = (isKeyPressed: Record<string, boolean>) => {
  // Key position animations
  const { backquotePosition } = useSpring({
    backquotePosition: isKeyPressed.backquote
      ? [-0.09729859, -0.00120405, -0.02940938]
      : [-0.09729859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { keyAPosition } = useSpring({
    keyAPosition: isKeyPressed.keyA
      ? [-0.07229859, -0.00366014, 0.00005019]
      : [-0.07229859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyZPosition } = useSpring({
    keyZPosition: isKeyPressed.keyZ
      ? [-0.06729859, -0.0031249, 0.01502963]
      : [-0.06729859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { tabPosition } = useSpring({
    tabPosition: isKeyPressed.tab
      ? [-0.09473687, 0.00162915, -0.01492494]
      : [-0.09473687, 0.00162915, -0.01492494],
    config: config.wobbly,
  });
  const { keyQPosition } = useSpring({
    keyQPosition: isKeyPressed.keyQ
      ? [-0.0772986, -0.00344518, -0.01492925]
      : [-0.0772986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { capsLockPosition } = useSpring({
    capsLockPosition: isKeyPressed.capsLock
      ? [-0.09223933, -0.0029753, 0.00005654]
      : [-0.09223933, 0.0009753, 0.00005654],
    config: config.wobbly,
  });
  const { shiftLeftPosition } = useSpring({
    shiftLeftPosition: isKeyPressed.shiftLeft
      ? [-0.08969236, -0.00328382, 0.01503743]
      : [-0.08969236, 0.00028382, 0.01503743],
    config: config.wobbly,
  });
  const { spacePosition } = useSpring({
    spacePosition: isKeyPressed.space
      ? [-0.0101736, -0.00318264, 0.03002318]
      : [-0.0101736, -0.00018264, 0.03002318],
    config: config.wobbly,
  });
  const { controlLeftPosition } = useSpring({
    controlLeftPosition: isKeyPressed.controlLeft
      ? [-0.0963335, -0.00382607, 0.03001072]
      : [-0.0963335, -0.00082607, 0.03001072],
    config: config.wobbly,
  });
  const { altLeftPosition } = useSpring({
    altLeftPosition: isKeyPressed.altLeft
      ? [-0.06276722, -0.00384373, 0.03001156]
      : [-0.06276722, -0.00084373, 0.03001156],
    config: config.wobbly,
  });
  const { altRightPosition } = useSpring({
    altRightPosition: isKeyPressed.altRight
      ? [0.04288521, -0.00384373, 0.03001156]
      : [0.04288521, -0.00084373, 0.03001156],
    config: config.wobbly,
  });
  const { controlRightPosition } = useSpring({
    controlRightPosition: isKeyPressed.controlRight
      ? [0.09589116, -0.00365773, 0.03001444]
      : [0.09589116, -0.00065773, 0.03001444],
    config: config.wobbly,
  });
  const { backslashPosition } = useSpring({
    backslashPosition: isKeyPressed.backslash
      ? [0.09729859, -0.00062915, -0.01492494]
      : [0.09729859, 0.00162915, -0.01492494],
    config: config.wobbly,
  });
  const { backspacePosition } = useSpring({
    backspacePosition: isKeyPressed.backspace
      ? [0.09432064, -0.00153688, -0.02940276]
      : [0.09432064, 0.00253688, -0.02940276],
    config: config.wobbly,
  });
  const { enterPosition } = useSpring({
    enterPosition: isKeyPressed.enter
      ? [0.09277438, -0.00105213, 0.00005773]
      : [0.09277438, 0.00105213, 0.00005773],
    config: config.wobbly,
  });
  const { shiftRightPosition } = useSpring({
    shiftRightPosition: isKeyPressed.shiftRight
      ? [0.0882763, -0.00338399, 0.01503898]
      : [0.0882763, 0.00038399, 0.01503898],
    config: config.wobbly,
  });
  const { digit1Position } = useSpring({
    digit1Position: isKeyPressed.digit1
      ? [-0.08299859, -0.00120405, -0.02940938]
      : [-0.08299859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit2Position } = useSpring({
    digit2Position: isKeyPressed.digit2
      ? [-0.06869859, -0.00120405, -0.02940938]
      : [-0.06869859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit3Position } = useSpring({
    digit3Position: isKeyPressed.digit3
      ? [-0.05439859, -0.00120405, -0.02940938]
      : [-0.05439859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit4Position } = useSpring({
    digit4Position: isKeyPressed.digit4
      ? [-0.0400986, -0.00120405, -0.02940938]
      : [-0.0400986, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit5Position } = useSpring({
    digit5Position: isKeyPressed.digit5
      ? [-0.0257986, -0.00120405, -0.02940938]
      : [-0.0257986, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit6Position } = useSpring({
    digit6Position: isKeyPressed.digit6
      ? [-0.01149859, -0.00120405, -0.02940938]
      : [-0.01149859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit7Position } = useSpring({
    digit7Position: isKeyPressed.digit7
      ? [0.0028014, -0.00120405, -0.02940938]
      : [0.0028014, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit8Position } = useSpring({
    digit8Position: isKeyPressed.digit8
      ? [0.01710142, -0.00120405, -0.02940938]
      : [0.01710142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit9Position } = useSpring({
    digit9Position: isKeyPressed.digit9
      ? [0.03140141, -0.00120405, -0.02940938]
      : [0.03140141, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit0Position } = useSpring({
    digit0Position: isKeyPressed.digit0
      ? [0.04570143, -0.00120405, -0.02940938]
      : [0.04570143, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { minusPosition } = useSpring({
    minusPosition: isKeyPressed.minus
      ? [0.06000142, -0.00120405, -0.02940938]
      : [0.06000142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { equalPosition } = useSpring({
    equalPosition: isKeyPressed.equal
      ? [0.07430142, -0.00120405, -0.02940938]
      : [0.07430142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { keySPosition } = useSpring({
    keySPosition: isKeyPressed.keyS
      ? [-0.05799859, -0.00366014, 0.00005019]
      : [-0.05799859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyDPosition } = useSpring({
    keyDPosition: isKeyPressed.keyD
      ? [-0.04369859, -0.00366014, 0.00005019]
      : [-0.04369859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyFPosition } = useSpring({
    keyFPosition: isKeyPressed.keyF
      ? [-0.02939859, -0.00366014, 0.00005019]
      : [-0.02939859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyGPosition } = useSpring({
    keyGPosition: isKeyPressed.keyG
      ? [-0.0150986, -0.00366014, 0.00005019]
      : [-0.0150986, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyHPosition } = useSpring({
    keyHPosition: isKeyPressed.keyH
      ? [-0.0007986, -0.00366014, 0.00005019]
      : [-0.0007986, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyJPosition } = useSpring({
    keyJPosition: isKeyPressed.keyJ
      ? [0.01350141, -0.00366014, 0.00005019]
      : [0.01350141, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyKPosition } = useSpring({
    keyKPosition: isKeyPressed.keyK
      ? [0.0278014, -0.00366014, 0.00005019]
      : [0.0278014, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyLPosition } = useSpring({
    keyLPosition: isKeyPressed.keyL
      ? [0.04210142, -0.00366014, 0.00005019]
      : [0.04210142, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { semicolonPosition } = useSpring({
    semicolonPosition: isKeyPressed.semicolon
      ? [0.05640141, -0.00366014, 0.00005019]
      : [0.05640141, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { quotePosition } = useSpring({
    quotePosition: isKeyPressed.quote
      ? [0.07070143, -0.00366014, 0.00005019]
      : [0.07070143, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyXPosition } = useSpring({
    keyXPosition: isKeyPressed.keyX
      ? [-0.05299859, -0.0031249, 0.01502963]
      : [-0.05299859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyCPosition } = useSpring({
    keyCPosition: isKeyPressed.keyC
      ? [-0.03869859, -0.0031249, 0.01502963]
      : [-0.03869859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyVPosition } = useSpring({
    keyVPosition: isKeyPressed.keyV
      ? [-0.02439859, -0.0031249, 0.01502963]
      : [-0.02439859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyBPosition } = useSpring({
    keyBPosition: isKeyPressed.keyB
      ? [-0.0100986, -0.0031249, 0.01502963]
      : [-0.0100986, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyNPosition } = useSpring({
    keyNPosition: isKeyPressed.keyN
      ? [0.0042014, -0.0031249, 0.01502963]
      : [0.0042014, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyMPosition } = useSpring({
    keyMPosition: isKeyPressed.keyM
      ? [0.01850141, -0.0031249, 0.01502963]
      : [0.01850141, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { commaPosition } = useSpring({
    commaPosition: isKeyPressed.comma
      ? [0.0328014, -0.0031249, 0.01502963]
      : [0.0328014, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { periodPosition } = useSpring({
    periodPosition: isKeyPressed.period
      ? [0.04710142, -0.0031249, 0.01502963]
      : [0.04710142, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { slashPosition } = useSpring({
    slashPosition: isKeyPressed.slash
      ? [0.06140141, -0.0031249, 0.01502963]
      : [0.06140141, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyWPosition } = useSpring({
    keyWPosition: isKeyPressed.keyW
      ? [-0.06299859, -0.00444518, -0.01492925]
      : [-0.06299859, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyEPosition } = useSpring({
    keyEPosition: isKeyPressed.keyE
      ? [-0.0486986, -0.00444518, -0.01492925]
      : [-0.0486986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyRPosition } = useSpring({
    keyRPosition: isKeyPressed.keyR
      ? [-0.0343986, -0.00444518, -0.01492925]
      : [-0.0343986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyTPosition } = useSpring({
    keyTPosition: isKeyPressed.keyT
      ? [-0.0200986, -0.00444518, -0.01492925]
      : [-0.0200986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyYPosition } = useSpring({
    keyYPosition: isKeyPressed.keyY
      ? [-0.0057986, -0.00444518, -0.01492925]
      : [-0.0057986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyUPosition } = useSpring({
    keyUPosition: isKeyPressed.keyU
      ? [0.0085014, -0.00444518, -0.01492925]
      : [0.0085014, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyIPosition } = useSpring({
    keyIPosition: isKeyPressed.keyI
      ? [0.0228014, -0.00444518, -0.01492925]
      : [0.0228014, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyOPosition } = useSpring({
    keyOPosition: isKeyPressed.keyO
      ? [0.03710142, -0.00444518, -0.01492925]
      : [0.03710142, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyPPosition } = useSpring({
    keyPPosition: isKeyPressed.keyP
      ? [0.05140141, -0.00444518, -0.01492925]
      : [0.05140141, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { bracketLeftPosition } = useSpring({
    bracketLeftPosition: isKeyPressed.bracketLeft
      ? [0.06570143, -0.00444518, -0.01492925]
      : [0.06570143, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { bracketRightPosition } = useSpring({
    bracketRightPosition: isKeyPressed.bracketRight
      ? [0.08000141, -0.00444518, -0.01492925]
      : [0.08000141, 0.00144518, -0.01492925],
    config: config.wobbly,
  });

  return {
    backquotePosition,
    keyAPosition,
    keyZPosition,
    tabPosition,
    keyQPosition,
    capsLockPosition,
    shiftLeftPosition,
    spacePosition,
    controlLeftPosition,
    altLeftPosition,
    altRightPosition,
    controlRightPosition,
    backslashPosition,
    backspacePosition,
    enterPosition,
    shiftRightPosition,
    digit1Position,
    digit2Position,
    digit3Position,
    digit4Position,
    digit5Position,
    digit6Position,
    digit7Position,
    digit8Position,
    digit9Position,
    digit0Position,
    minusPosition,
    equalPosition,
    keySPosition,
    keyDPosition,
    keyFPosition,
    keyGPosition,
    keyHPosition,
    keyJPosition,
    keyKPosition,
    keyLPosition,
    semicolonPosition,
    quotePosition,
    keyXPosition,
    keyCPosition,
    keyVPosition,
    keyBPosition,
    keyNPosition,
    keyMPosition,
    commaPosition,
    periodPosition,
    slashPosition,
    keyWPosition,
    keyEPosition,
    keyRPosition,
    keyTPosition,
    keyYPosition,
    keyUPosition,
    keyIPosition,
    keyOPosition,
    keyPPosition,
    bracketLeftPosition,
    bracketRightPosition,
  } as const;
};

export default useKeyboardKeyAnimations;
