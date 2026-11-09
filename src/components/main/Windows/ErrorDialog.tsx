import StopIcon from "./../../../Data/StopIcon";

export default function ErrorDialog({ message }: { message: string }) {
  return (
    <div className="w-100 bg-stone-200 border-2 border-black p-4 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex flex-col font-bold text-[13px] select-none">
      <div className="flex gap-4 items-start mb-8 mt-2">
        <StopIcon
          size={48}
          className="shrink-0 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]"
        />

        <div className="pt-2">{message}</div>
      </div>
    </div>
  );
}
