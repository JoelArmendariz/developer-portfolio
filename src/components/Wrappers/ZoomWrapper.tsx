import { useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import { POSITIONS, ROTATIONS } from "../../types/constants";

export default function ZoomWrapper({
  children,
  targetPosition,
  targetRotation,
}: {
  children: JSX.Element;
  targetPosition: readonly [number, number, number];
  targetRotation?: readonly [number, number, number];
}) {
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    TWEEN.update();
  });

  const handleFocus = () => {
    new TWEEN.Tween(camera.position)
      .to(
        {
          x: targetPosition[0],
          y: targetPosition[1],
          z: targetPosition[2],
        },
        1000
      )
      .start();
    if (targetRotation) {
      new TWEEN.Tween(camera.rotation)
        .to(
          {
            x: targetRotation[0],
            y: targetRotation[1],
            z: targetRotation[2],
          },
          1000
        )
        .start();
    }
  };

  const handleUnfocus = () => {
    new TWEEN.Tween(camera.position)
      .to(
        {
          x: POSITIONS.DEFAULT_CAMERA[0],
          y: POSITIONS.DEFAULT_CAMERA[1],
          z: POSITIONS.DEFAULT_CAMERA[2],
        },
        1000
      )
      .start();
    new TWEEN.Tween(camera.rotation)
      .to(
        {
          x: ROTATIONS.DEFAULT_CAMERA[0],
          y: ROTATIONS.DEFAULT_CAMERA[1],
          z: ROTATIONS.DEFAULT_CAMERA[2],
        },
        1000
      )
      .start();
  };

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        handleFocus();
      }}
      onPointerMissed={handleUnfocus}
    >
      {children}
    </group>
  );
}
