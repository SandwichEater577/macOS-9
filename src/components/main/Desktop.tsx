import { useState, useEffect, useRef } from "react";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const GRID_SIZE = 84;
  const PADDING = 16;
  const getSnappedRight = (width: number) => {
    if (width <= 0) return PADDING;
    const available = width - 2 * PADDING;
    const cols = Math.max(0, Math.floor((available - GRID_SIZE) / GRID_SIZE));
    return PADDING + cols * GRID_SIZE;
  };

  const getSnappedBottom = (height: number) => {
    if (height <= 0) return PADDING;
    const available = height - 2 * PADDING;
    const rows = Math.max(0, Math.floor((available - GRID_SIZE) / GRID_SIZE));
    return PADDING + rows * GRID_SIZE;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
    >
      {size.width > 0 && size.height > 0 && (
        <div className="pointer-events-auto w-full h-full relative overflow-hidden">
          <DesktopIcon
            iconPath="/icon-assets/png64px/34.png"
            label="Folder"
            initialX={PADDING}
            initialY={PADDING}
            gridSize={GRID_SIZE}
            padding={PADDING}
            maxX={size.width}
            maxY={size.height}
          />

          <DesktopIcon
            iconPath="/icon-assets/png64px/1.png"
            label="Macintosh HD"
            initialX={getSnappedRight(size.width)}
            initialY={PADDING}
            gridSize={GRID_SIZE}
            padding={PADDING}
            maxX={size.width}
            maxY={size.height}
          />

          <DesktopIcon
            iconPath="/icon-assets/png64px/7.png"
            label="Trash"
            initialX={getSnappedRight(size.width)}
            initialY={getSnappedBottom(size.height)}
            gridSize={GRID_SIZE}
            padding={PADDING}
            maxX={size.width}
            maxY={size.height}
          />
        </div>
      )}
    </div>
  );
}
