export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isFullscreen: boolean;
  isMinimized: boolean;
  x: number;
  y: number;
  z: number;
  xsize: number;
  ysize: number;
  content: Record<string, any>;
};

export const initialWindows: WindowState[] = [
  {
    id: "about",
    title: "About This Computer",
    isOpen: true,
    isFullscreen: false,
    isMinimized: false,
    x: 100,
    y: 100,
    z: 10,
    xsize: 600,
    ysize: 450,
    content: {},
  },
  {
    id: "stickies",
    title: "Stickies",
    isOpen: false,
    isFullscreen: false,
    isMinimized: false,
    x: 200,
    y: 200,
    z: 9,
    xsize: 300,
    ysize: 300,
    content: {},
  },
  {
    id: "calculator",
    title: "Calculator",
    isOpen: false,
    isFullscreen: false,
    isMinimized: false,
    x: 300,
    y: 150,
    z: 8,
    xsize: 200,
    ysize: 300,
    content: {},
  },
];
