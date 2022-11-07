import { createContext } from "react";

export enum Objects {
  NONE = "NONE",
  MONITOR = "MONITOR",
  GUITAR = "GUITAR",
}

interface ZoomContextState {
  activeObject: Objects;
  showOrbitalControls: boolean;
  handleZoom: (obj: Objects, shouldRotate?: boolean) => void;
  handleUnzoom: () => void;
}

export const ZoomContext = createContext<ZoomContextState>(
  {} as ZoomContextState
);
