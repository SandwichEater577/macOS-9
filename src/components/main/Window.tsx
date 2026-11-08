import { useRef, type ReactNode } from "react";
import type { WindowState } from "../../Data/windowsData";

type Props = {
  data: WindowState;
  onUpdate: (updates: Partial<WindowState>) => void;
  onClose: () => void;
  onFocus: () => void;
  children: ReactNode;
};

export default function Window({
  data,
  onUpdate,
  onClose,
  onFocus,
  children,
}: Props) {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });
  const resizeRef = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
  });

  if (!data.isOpen) return null;

  const toggleShade = () => {
    if (!data.isShaded) {
      onUpdate({ isShaded: true, lastHeight: data.height, height: 24 });
    } else {
      onUpdate({ isShaded: false, height: data.lastHeight });
    }
  };

  const handleDragPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    onFocus();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startPosX: data.x,
      startPosY: data.y,
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
      newX = Math.max(0, Math.min(newX, parentRect.width - data.width));
      newY = Math.max(0, Math.min(newY, parentRect.height - data.height));
    }
    onUpdate({ x: newX, y: newY });
  };

  const handleDragPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleResizePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    onFocus();
    event.currentTarget.setPointerCapture(event.pointerId);
    resizeRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startWidth: data.width,
      startHeight: data.height,
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
      newWidth = Math.min(newWidth, parentRect.width - data.x);
      newHeight = Math.min(newHeight, parentRect.height - data.y);
    }
    onUpdate({ width: newWidth, height: newHeight });
  };

  const handleResizePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      ref={windowRef}
      onPointerDown={onFocus}
      style={{
        width: data.width,
        height: data.height,
        left: data.x,
        top: data.y,
        zIndex: data.z,
      }}
      className="absolute bg-[#e5e5e5] border-2 border-black p-0.5 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex flex-col select-none"
    >
      <div
        onPointerDown={handleDragPointerDown}
        onPointerMove={handleDragPointerMove}
        onPointerUp={handleDragPointerUp}
        className="h-6 bg-[#e5e5e5] border-b-2 border-black flex items-center justify-between px-1 shrink-0 cursor-default touch-none"
      >
        <button
          onPointerDown={(event) => event.stopPropagation()}
          onClick={onClose}
          className="relative w-3 h-3 outline-2 outline-black border border-white border-b-[#888] border-r-[#888] bg-[#e5e5e5] active:bg-gray-300"
        >
          <div className="h-px w-2 absolute top-5/11 left-5/11 transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-black"></div>
          <div className="h-px w-2 absolute top-5/11 left-5/11 transform -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-black"></div>
        </button>
        <div className="flex flex-col gap-px ml-2 flex-1">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-px bg-white border-b-2 border-b-[#888]"
            />
          ))}
        </div>
        <div className="px-2 font-bold text-[13px] leading-none whitespace-nowrap">
          {data.title}
        </div>
        <div className="flex flex-col gap-px mr-2 flex-1">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-px bg-white border-b-2 border-b-[#888]"
            />
          ))}
        </div>
        <div className="flex gap-1">
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={toggleShade}
            className="relative flex flex-col items-center justify-center w-3 h-3 outline-2 outline-black border border-white border-b-[#888] border-r-[#888] bg-[#e5e5e5] active:bg-gray-300"
          >
            <div className="h-0.5 w-6/8 absolute top-4/8 left-4/8 transform -translate-x-1/2 -translate-y-1/2 bg-black"></div>
            {data.isShaded && (
              <div className="h-6/8 w-0.5 absolute top-4/8 left-4/8 transform -translate-x-1/2 -translate-y-1/2 bg-black"></div>
            )}
          </button>
        </div>
      </div>

      {!data.isShaded && (
        <div className="bg-white border-[3px] border-t-0 border-black flex-1 relative overflow-hidden flex flex-col">
          <div className="p-1 flex-1 overflow-auto">{children}</div>

          <div
            onPointerDown={handleResizePointerDown}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            className="absolute bottom-0 right-0 w-4 h-4 bg-[#e5e5e5] border-t-2 border-l-2 border-black cursor-nwse-resize flex items-center justify-center touch-none"
          >
            <div className="w-2.5 h-2.5 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#888_2px,#888_3px)]" />
          </div>
        </div>
      )}
    </div>
  );
}
