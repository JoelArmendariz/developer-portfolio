import { useCallback, useContext, useMemo, useState } from "react";
import { Objects, ZoomContext } from "./ZoomContext";
import { useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import { POSITIONS, ROTATIONS, ZoomDefaults } from "../../types/constants";

interface ZoomProviderProps {
  children: JSX.Element;
}

const ZoomProvider = ({ children }: ZoomProviderProps) => {
  const [showOrbitalControls, setShowOrbitalControls] = useState(true);
  const [activeObject, setActiveObject] = useState(Objects.NONE);
  const camera = useThree((state) => state.camera);
  useFrame(() => {
    TWEEN.update();
  });

  const handleZoom = useCallback(
    (obj: Objects, shouldRotate?: boolean) => {
      setActiveObject(obj);
      setShowOrbitalControls?.(false);
      const x = (POSITIONS[obj] || [])[0];
      const y = (POSITIONS[obj] || [])[1];
      const z = (POSITIONS[obj] || [])[2];
      new TWEEN.Tween(camera.position).to({ x, y, z }, 1000).start();
      if (shouldRotate) {
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
      }
    },
    [camera.position, camera.rotation]
  );

  const handleUnzoom = useCallback(() => {
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
  }, [camera.position, camera.rotation]);

  const value = useMemo(
    () => ({
      activeObject,
      handleZoom,
      handleUnzoom,
      showOrbitalControls,
    }),
    [activeObject, handleUnzoom, handleZoom, showOrbitalControls]
  );

  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
};

export default ZoomProvider;

export const useZoomContext = () => useContext(ZoomContext);
