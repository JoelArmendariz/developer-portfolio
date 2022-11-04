import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";
import useKeyboard, { Keys } from "../hooks/keyboard/useKeyboard";

export default function Keyboard(props: any) {
  const group = useRef();

  const { nodes, materials }: any = useGLTF("/models/keyboard_complex.glb");

  const { handleKeypress, getRefAndPosition, playAnimation } = useKeyboard();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === Keys.tab) {
        e.preventDefault();
      }
      handleKeypress("DOWN", e.code);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      handleKeypress("UP", e.code);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeypress]);

  return (
    <group onClick={playAnimation} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <animated.mesh
          name="plate"
          castShadow
          receiveShadow
          geometry={nodes.plate.geometry}
          material={materials.plate}
          position={[0.00134338, -0.01323594, -0.00115875]}
          userData={{ name: "plate" }}
        />
        <group
          name="Cube020"
          position={[-0.06279859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.020" }}
        >
          <animated.mesh
            name="Cube070_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube070_1.geometry}
            material={materials["switch bottom.001"]}
          />
          <animated.mesh
            name="Cube070_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube070_2.geometry}
            material={materials["switch.001"]}
          />
        </group>
        <group
          name="Cube021"
          position={[-0.07955249, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.021" }}
        >
          <animated.mesh
            name="Cube071_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube071_1.geometry}
            material={materials["switch bottom.002"]}
          />
          <animated.mesh
            name="Cube071_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube071_2.geometry}
            material={materials["switch.002"]}
          />
        </group>
        <group
          name="Cube022"
          position={[-0.09629859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.022" }}
        >
          <animated.mesh
            name="Cube072_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials["switch bottom.003"]}
          />
          <animated.mesh
            name="Cube072_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_2.geometry}
            material={materials["switch.003"]}
          />
        </group>
        <group
          name="Cube023"
          position={[-0.09029859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.023" }}
        >
          <animated.mesh
            name="Cube073_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube073_1.geometry}
            material={materials["switch bottom.004"]}
          />
          <animated.mesh
            name="Cube073_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube073_2.geometry}
            material={materials["switch.004"]}
          />
        </group>
        <group
          name="Cube024"
          position={[-0.09179859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.024" }}
        >
          <animated.mesh
            name="Cube074_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube074_1.geometry}
            material={materials["switch bottom.005"]}
          />
          <animated.mesh
            name="Cube074_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube074_2.geometry}
            material={materials["switch.005"]}
          />
        </group>
        <group
          name="Cube025"
          position={[-0.09429859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.025" }}
        >
          <animated.mesh
            name="Cube075_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials["switch bottom.006"]}
          />
          <animated.mesh
            name="Cube075_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube075_2.geometry}
            material={materials["switch.006"]}
          />
        </group>
        <group
          name="Cube026"
          position={[-0.09729859, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.026" }}
        >
          <animated.mesh
            name="Cube076_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube076_1.geometry}
            material={materials["switch bottom.007"]}
          />
          <animated.mesh
            name="Cube076_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube076_2.geometry}
            material={materials["switch.007"]}
          />
        </group>
        <group
          name="Cube019"
          position={[-0.07729859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.019" }}
        >
          <animated.mesh
            name="Cube077_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials["switch bottom.008"]}
          />
          <animated.mesh
            name="Cube077_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube077_2.geometry}
            material={materials["switch.008"]}
          />
        </group>
        <group
          name="Cube027"
          position={[-0.07229859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.027" }}
        >
          <animated.mesh
            name="Cube078_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube078_1.geometry}
            material={materials["switch bottom.009"]}
          />
          <animated.mesh
            name="Cube078_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube078_2.geometry}
            material={materials["switch.009"]}
          />
        </group>
        <group
          name="Cube028"
          position={[-0.06729859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.028" }}
        >
          <animated.mesh
            name="Cube079_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials["switch bottom.010"]}
          />
          <animated.mesh
            name="Cube079_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube079_2.geometry}
            material={materials["switch.010"]}
          />
        </group>
        <group
          name="Cube029"
          position={[-0.04479859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.029" }}
        >
          <animated.mesh
            name="Cube080_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube080_1.geometry}
            material={materials["switch bottom.011"]}
          />
          <animated.mesh
            name="Cube080_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube080_2.geometry}
            material={materials["switch.011"]}
          />
        </group>
        <group
          name="Cube030"
          position={[0.02420142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.030" }}
        >
          <animated.mesh
            name="Cube081"
            castShadow
            receiveShadow
            geometry={nodes.Cube081.geometry}
            material={materials["switch bottom.012"]}
          />
          <animated.mesh
            name="Cube081_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube081_1.geometry}
            material={materials["switch.012"]}
          />
        </group>
        <group
          name="Cube031"
          position={[0.04320142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.031" }}
        >
          <animated.mesh
            name="Cube082"
            castShadow
            receiveShadow
            geometry={nodes.Cube082.geometry}
            material={materials["switch bottom.013"]}
          />
          <animated.mesh
            name="Cube082_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube082_1.geometry}
            material={materials["switch.013"]}
          />
        </group>
        <group
          name="Cube032"
          position={[0.05970141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.032" }}
        >
          <animated.mesh
            name="Cube083"
            castShadow
            receiveShadow
            geometry={nodes.Cube083.geometry}
            material={materials["switch bottom.014"]}
          />
          <animated.mesh
            name="Cube083_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube083_1.geometry}
            material={materials["switch.014"]}
          />
        </group>
        <group
          name="Cube033"
          position={[0.07620141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.033" }}
        >
          <animated.mesh
            name="Cube084"
            castShadow
            receiveShadow
            geometry={nodes.Cube084.geometry}
            material={materials["switch bottom.015"]}
          />
          <animated.mesh
            name="Cube084_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube084_1.geometry}
            material={materials["switch.015"]}
          />
        </group>
        <group
          name="Cube034"
          position={[0.09570141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.034" }}
        >
          <animated.mesh
            name="Cube085"
            castShadow
            receiveShadow
            geometry={nodes.Cube085.geometry}
            material={materials["switch bottom.016"]}
          />
          <animated.mesh
            name="Cube085_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube085_1.geometry}
            material={materials["switch.016"]}
          />
        </group>
        <group
          name="Cube035"
          position={[0.08770142, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.035" }}
        >
          <animated.mesh
            name="Cube086"
            castShadow
            receiveShadow
            geometry={nodes.Cube086.geometry}
            material={materials["switch bottom.017"]}
          />
          <animated.mesh
            name="Cube086_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube086_1.geometry}
            material={materials["switch.017"]}
          />
        </group>
        <group
          name="Cube036"
          position={[0.09270142, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.036" }}
        >
          <animated.mesh
            name="Cube087"
            castShadow
            receiveShadow
            geometry={nodes.Cube087.geometry}
            material={materials["switch bottom.018"]}
          />
          <animated.mesh
            name="Cube087_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube087_1.geometry}
            material={materials["switch.018"]}
          />
        </group>
        <group
          name="Cube037"
          position={[0.09720142, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.037" }}
        >
          <animated.mesh
            name="Cube088"
            castShadow
            receiveShadow
            geometry={nodes.Cube088.geometry}
            material={materials["switch bottom.019"]}
          />
          <animated.mesh
            name="Cube088_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube088_1.geometry}
            material={materials["switch.019"]}
          />
        </group>
        <group
          name="Cube038"
          position={[0.09470141, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.038" }}
        >
          <animated.mesh
            name="Cube024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials["switch bottom"]}
          />
          <animated.mesh
            name="Cube024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials["switch"]}
          />
        </group>
        {/* //SECTION - Keys */}
        <animated.mesh
          {...getRefAndPosition(Keys.backquote)}
          name="Backquote"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["keycaps2.001"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyA)}
          name="KeyA"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["keycaps2.002"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.001" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyZ)}
          name="KeyZ"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["keycaps2.003"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.002" }}
        />
        {/* Tab intentionally left nonfunctional (it grabs iframe on press causing it to not rebound correctly) */}
        <animated.mesh
          {...getRefAndPosition(Keys.tab)}
          name="Tab"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["keycaps.001"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.003" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyQ)}
          name="KeyQ"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["keycaps2.004"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.004" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.capsLock)}
          name="CapsLock"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["keycaps.002"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.005" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.shiftLeft)}
          name="ShiftLeft"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["keycaps.001"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.006" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.space)}
          name="Space"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["keycaps.004"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.007" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.controlLeft)}
          name="ControlLeft"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["keycaps.005"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.008" }}
        />
        {/* Meta (windows/apple/linux/super) intentionally left non functional */}
        <animated.mesh
          name="MetaLeft"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["keycaps.006"]}
          position={[-0.07954678, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.009" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.altLeft)}
          name="AltLeft"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["keycaps.007"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.010" }}
        />
        {/* The "Menu key" left non functional intentionally */}
        <animated.mesh
          name="Menu"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["keycaps.008"]}
          position={[0.0764515, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.011" }}
        />
        {/* Right win/super/mac ect key, intentionally left non functional */}
        <animated.mesh
          name="Super"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["keycaps.009"]}
          position={[0.05967194, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.012" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.altRight)}
          name="AltRight"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["keycaps.010"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.013" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.controlRight)}
          name="ControlRight"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["keycaps.011"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.014" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.backslash)}
          name="Backslash"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["keycaps.012"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.015" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.backspace)}
          name="Backspace"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["keycaps.013"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.016" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.enter)}
          name="Enter"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["keycaps.014"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.017" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.shiftRight)}
          name="ShiftRight"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.keycaps}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.018" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit1)}
          name="Digit1"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials["keycaps2.005"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.039" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit2)}
          name="Digit2"
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials["keycaps2.006"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.040" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit3)}
          name="Digit3"
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials["keycaps2.007"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.041" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit4)}
          name="Digit4"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials["keycaps2.008"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.042" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit5)}
          name="Digit5"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials["keycaps2.009"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.043" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit6)}
          name="Digit6"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials["keycaps2.010"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.044" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit7)}
          name="Digit7"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials["keycaps2.011"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.045" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit8)}
          name="Digit8"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials["keycaps2.012"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.046" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit9)}
          name="Digit9"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials["keycaps2.013"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.047" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.digit0)}
          name="Digit0"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials["keycaps2.014"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.048" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.minus)}
          name="Minus"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials["keycaps2.015"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.049" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.equal)}
          name="Equal"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials["keycaps2.016"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.050" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyS)}
          name="KeyS"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials["keycaps2.017"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.051" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyD)}
          name="KeyD"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials["keycaps2.018"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.052" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyF)}
          name="KeyF"
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials["keycaps2.019"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.053" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyG)}
          name="KeyG"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["keycaps2.020"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.054" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyH)}
          name="KeyH"
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials["keycaps2.021"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.055" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyJ)}
          name="KeyJ"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials["keycaps2.022"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.056" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyK)}
          name="KeyK"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials["keycaps2.023"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.057" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyL)}
          name="KeyL"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials["keycaps2.024"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.058" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.semicolon)}
          name="Semicolon"
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials["keycaps2.025"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.059" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.quote)}
          name="Quote"
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials["keycaps2.026"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.060" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyX)}
          name="KeyX"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials["keycaps2.027"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.061" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyC)}
          name="KeyC"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials["keycaps2.028"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.062" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyV)}
          name="KeyV"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials["keycaps2.029"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.063" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyB)}
          name="KeyB"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials["keycaps2.030"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.064" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyN)}
          name="KeyN"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials["keycaps2.031"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.065" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyM)}
          name="KeyM"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials["keycaps2.032"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.066" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.comma)}
          name="Comma"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials["keycaps2.033"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.067" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.period)}
          name="Period"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials["keycaps2.034"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.068" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.slash)}
          name="Slash"
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials["keycaps2.035"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.069" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyW)}
          name="KeyW"
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials["keycaps2.036"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.070" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyE)}
          name="KeyE"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials["keycaps2.037"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.071" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyR)}
          name="KeyR"
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials["keycaps2.038"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.072" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyT)}
          name="KeyT"
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials["keycaps2.039"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.073" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyY)}
          name="KeyY"
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials["keycaps2.040"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.074" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyU)}
          name="KeyU"
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials["keycaps2.041"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.075" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyI)}
          name="KeyI"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials["keycaps2.042"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.076" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyO)}
          name="KeyO"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials["keycaps2.043"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.077" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.keyP)}
          name="KeyP"
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={materials["keycaps2.044"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.078" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.bracketLeft)}
          name="BracketLeft"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials["keycaps2.045"]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.079" }}
        />
        <animated.mesh
          {...getRefAndPosition(Keys.bracketRight)}
          name="BracketRight"
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={materials.keycaps2}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: "Cube.080" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/keyboard_complex.glb");
