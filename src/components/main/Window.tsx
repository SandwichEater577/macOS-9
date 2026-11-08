import { type ReactNode } from "react";
import { useWindowState } from "../../Hooks/useWindowState";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Window({ title, children }: Props) {
  const {
    size,
    pos,
    windowRef,
    handleDragPointerDown,
    handleDragPointerMove,
    handleDragPointerUp,
    handleResizePointerDown,
    handleResizePointerMove,
    handleResizePointerUp,
  } = useWindowState();

  return (
    <div
      ref={windowRef}
      style={{
        width: size.width,
        height: size.height,
        left: pos.x,
        top: pos.y,
      }}
      className="absolute bg-[#e5e5e5] border-2 border-black p-0.5 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex flex-col select-none"
    >
      <div
        onPointerDown={handleDragPointerDown}
        onPointerMove={handleDragPointerMove}
        onPointerUp={handleDragPointerUp}
        className="h-6 bg-[#e5e5e5] border-b-2 border-black flex items-center justify-between px-1 shrink-0 cursor-default touch-none"
      >
        <button className="w-3 h-3 outline-2 outline-black border border-white border-b-[#888] border-r-[#888] bg-[#e5e5e5]" />

        <div className="flex flex-col gap-px ml-2 flex-1">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-px bg-white border-b-2 border-b-[#888]"
            />
          ))}
        </div>

        <div className="px-2 font-bold text-[13px] leading-none whitespace-nowrap">
          {title}
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
          <button className="w-3 h-3 outline-2 outline-black border border-white border-b-[#888] border-r-[#888] bg-[#e5e5e5]" />
          <button className="w-3 h-3 outline-2 outline-black border border-white border-b-[#888] border-r-[#888] bg-[#e5e5e5]" />
        </div>
      </div>

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
    </div>
  );
}
