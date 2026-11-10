import { type ReactNode } from "react";
import StopIcon from "./../../../Data/StopIcon";

type Props = {
  title?: string;
  children?: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
};

export default function ErrorDialog({ title, children, actions, icon }: Props) {
  return (
    <div className="w-112.5 bg-stone-200 border-2 border-black p-4 flex flex-col font-bold text-[13px] select-none">
      {title && <div className="mb-2">{title}</div>}

      <div className="flex gap-4 items-start mb-4 mt-2">
        <div className="shrink-0">{icon || <StopIcon size={48} />}</div>

        <div className="pt-2 flex-1">{children}</div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        {actions || (
          <button className="px-8 py-1 border-2 border-black bg-stone-200 active:bg-stone-300">
            OK
          </button>
        )}
      </div>
    </div>
  );
}
