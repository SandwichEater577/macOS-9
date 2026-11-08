export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isShaded: boolean;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  lastHeight: number;
};

export const initialWindows: Record<string, WindowState> = {
  about: {
    id: "about",
    title: "About This Computer",
    isOpen: false,
    isShaded: false,
    x: 80,
    y: 80,
    z: 10,
    width: 530,
    height: 320,
    lastHeight: 320,
  },
  profiler: {
    id: "profiler",
    title: "Apple System Profiler",
    isOpen: false,
    isShaded: false,
    x: 120,
    y: 120,
    z: 10,
    width: 650,
    height: 450,
    lastHeight: 450,
  },
};
