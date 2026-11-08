import { useState, useRef } from "react";

export function useWindowState() {
  const [isShaded, setIsShaded] = useState(false);
  const [size, setSize] = useState({ width: 530, height: 320 });
  const [pos, setPos] = useState({ x: 80, y: 80 });

  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });
  const resizeRef = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
  });
  const lastHeight = useRef(320);

  const toggleShade = () => {
    if (!isShaded) {
      lastHeight.current = size.height;
      setSize((prev) => ({ ...prev, height: 24 }));
    } else {
      setSize((prev) => ({ ...prev, height: lastHeight.current }));
    }
    setIsShaded(!isShaded);
  };

  const handleDragPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
  };

  const handleDragPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    const deltaX = event.clientX - dragRef.current.startX;
    const deltaY = event.clientY - dragRef.current.startY;

    let newX = dragRef.current.startPosX + deltaX;
    let newY = dragRef.current.startPosY + deltaY;

    const parent = windowRef.current?.parentElement;
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      newX = Math.max(0, Math.min(newX, parentRect.width - size.width));
      newY = Math.max(0, Math.min(newY, parentRect.height - size.height));
    }

    setPos({ x: newX, y: newY });
  };

  const handleDragPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleResizePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    resizeRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startWidth: size.width,
      startHeight: size.height,
    };
  };

  const handleResizePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    const deltaX = event.clientX - resizeRef.current.startX;
    const deltaY = event.clientY - resizeRef.current.startY;

    let newWidth = Math.max(530, resizeRef.current.startWidth + deltaX);
    let newHeight = Math.max(320, resizeRef.current.startHeight + deltaY);

    const parent = windowRef.current?.parentElement;
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      newWidth = Math.min(newWidth, parentRect.width - pos.x);
      newHeight = Math.min(newHeight, parentRect.height - pos.y);
    }

    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return {
    isShaded,
    toggleShade,
    size,
    pos,
    windowRef,
    handleDragPointerDown,
    handleDragPointerMove,
    handleDragPointerUp,
    handleResizePointerDown,
    handleResizePointerMove,
    handleResizePointerUp,
  };
}
