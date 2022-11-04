export const POSITIONS = {
  DEFAULT_CAMERA: [0, 2, 4] as const,
  MONITOR: [0, 1.2, 1.2] as const,
  GUITAR: [-7, -1, -1] as const,
};

export const ROTATIONS: Record<string, [number, number, number]> = {
  DEFAULT_CAMERA: [-0.5, 0, 0],
  GUITAR: [0, -2, 0],
};
