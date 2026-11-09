import { useState, useRef, useEffect } from "react";

type Props = {
  iconPath: string;
  label: string;
  initialX: number;
  initialY: number;
  gridSize?: number;
  padding?: number;
  maxX: number;
  maxY: number;
};

export default function DesktopIcon({
  iconPath,
  label,
  initialX,
  initialY,
  gridSize = 84,
  padding = 16,
  maxX,
  maxY,
}: Props) {
  const [pos, setPos] = useState(() => ({
    x: Math.max(padding, Math.min(initialX, maxX - gridSize - padding)),
    y: Math.max(padding, Math.min(initialY, maxY - gridSize - padding)),
  }));

  const dragRef = useRef({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
    isDragging: false,
  });

  // NOWE: Reagowanie na zmianę rozmiaru okna (np. wyjście z fullscreen)
  useEffect(() => {
    if (maxX === 0 || maxY === 0) return;

    const limitX = Math.max(padding, maxX - gridSize - padding);
    const limitY = Math.max(padding, maxY - gridSize - padding);

    setPos((prev) => {
      let newX = prev.x;
      let newY = prev.y;
      let changed = false;

      // Jeśli ikonka wyjechała za prawo
      if (newX > limitX) {
        newX = Math.floor((limitX - padding) / gridSize) * gridSize + padding;
        changed = true;
      }
      // Jeśli ikonka wyjechała za dół
      if (newY > limitY) {
        newY = Math.floor((limitY - padding) / gridSize) * gridSize + padding;
        changed = true;
      }

      return changed ? { x: newX, y: newY } : prev;
    });
  }, [maxX, maxY, gridSize, padding]);

  const onPointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      posX: pos.x,
      posY: pos.y,
      isDragging: true,
    };
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragRef.current.isDragging) return;

    const deltaX = event.clientX - dragRef.current.startX;
    const deltaY = event.clientY - dragRef.current.startY;

    let newX = dragRef.current.posX + deltaX;
    let newY = dragRef.current.posY + deltaY;

    const minX = padding;
    const minY = padding;
    const limitX = Math.max(padding, maxX - gridSize - padding);
    const limitY = Math.max(padding, maxY - gridSize - padding);

    newX = Math.max(minX, Math.min(newX, limitX));
    newY = Math.max(minY, Math.min(newY, limitY));

    setPos({ x: newX, y: newY });
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    event.currentTarget.releasePointerCapture(event.pointerId);

    const minX = padding;
    const minY = padding;
    const limitX = Math.max(padding, maxX - gridSize - padding);
    const limitY = Math.max(padding, maxY - gridSize - padding);

    let snappedX =
      Math.round((pos.x - padding) / gridSize) * gridSize + padding;
    let snappedY =
      Math.round((pos.y - padding) / gridSize) * gridSize + padding;

    snappedX = Math.max(minX, Math.min(snappedX, limitX));
    snappedY = Math.max(minY, Math.min(snappedY, limitY));

    setPos({ x: snappedX, y: snappedY });
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="absolute flex flex-col items-center cursor-default select-none touch-none"
      style={{ left: pos.x, top: pos.y, width: gridSize }}
    >
      <img
        src={iconPath}
        alt={label}
        className="w-12 h-12 object-contain pointer-events-none"
      />
      <span className="bg-white text-black text-[11px] font-bold px-1 mt-1 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
