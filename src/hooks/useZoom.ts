import { useCallback, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";
import {
  POSITIONS,
  ROTATIONS,
  ZoomDefaults,
  Objects,
} from "../types/constants";
import { useFrame, useThree } from "@react-three/fiber";

const useZoom = () => {
  const camera = useThree((state) => state.camera);
  const [showOrbitalControls, setShowOrbitalControls] = useState(true);
  const [activeObject, setActiveObject] = useState(Objects.NONE);

  useFrame(() => {
    TWEEN.update();
  });

  const handleZoom = useCallback(
    (obj: Objects) => {
      if (obj === activeObject) return;
      setActiveObject(obj);
      setShowOrbitalControls?.(false);
      const x = (POSITIONS[obj] || [])[0];
      const y = (POSITIONS[obj] || [])[1];
      const z = (POSITIONS[obj] || [])[2];
      new TWEEN.Tween(camera.position).to({ x, y, z }, 1000).start();

      const rotationX = (ROTATIONS[obj] || [])[0];
      const rotationY = (ROTATIONS[obj] || [])[1];
      const rotationZ = (ROTATIONS[obj] || [])[2];
      new TWEEN.Tween(camera.rotation)
        .to(
          {
            x: rotationX,
            y: rotationY,
            z: rotationZ,
          },
          1000
        )
        .start();
    },
    [activeObject, camera.position, camera.rotation]
  );

  const handleUnzoom = useCallback(() => {
    if (activeObject === Objects.NONE) return;
    setActiveObject(Objects.NONE);
    setShowOrbitalControls?.(true);
    new TWEEN.Tween(camera.position)
      .to(
        {
          x: (POSITIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[0],
          y: (POSITIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[1],
          z: (POSITIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[2],
        },
        1000
      )
      .start();
    new TWEEN.Tween(camera.rotation)
      .to(
        {
          x: (ROTATIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[0],
          y: (ROTATIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[1],
          z: (ROTATIONS[ZoomDefaults.DEFAULT_CAMERA] || [])[2],
        },
        1000
      )
      .start();
  }, [camera.position, camera.rotation, activeObject]);

  return {
    activeObject,
    handleZoom,
    handleUnzoom,
    showOrbitalControls,
  };
};

export default useZoom;
