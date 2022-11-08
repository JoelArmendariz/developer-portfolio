export enum Objects {
  NONE = "NONE",
  MONITOR = "MONITOR",
  MONITOR_FULLSCREEN = "MONITOR_FULLSCREEN",
  GUITAR = "GUITAR",
}

export enum ZoomDefaults {
  DEFAULT_CAMERA = "DEFAULT_CAMERA",
  DEFAULT_SCENE = "DEFAULT_SCENE",
}

type ZoomProps = Partial<
  Record<Objects | ZoomDefaults, [number, number, number]>
>;

export const POSITIONS: ZoomProps = {
  DEFAULT_SCENE: [0, 0, 0],
  DEFAULT_CAMERA: [0, 2, 4],
  MONITOR: [0, 1.3, 1.2],
  MONITOR_FULLSCREEN: [0, 0.8, -0.2],
  GUITAR: [-7, -1, -1],
};

export const ROTATIONS: ZoomProps = {
  DEFAULT_CAMERA: [-0.5, 0, 0],
  MONITOR: [-0.5, 0, 0],
  MONITOR_FULLSCREEN: [0, 0, 0],
  GUITAR: [0, -2, 0],
};
