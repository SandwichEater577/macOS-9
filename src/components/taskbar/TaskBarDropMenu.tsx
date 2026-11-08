import { useEffect, useRef } from "react";
import { taskBarMenus } from "../../Data/taskbarData";

export default function TaskBarDropMenu({
  isTaskBarButtonClicked,
  setIsTaskBarButtonClicked,
}: {
  isTaskBarButtonClicked: string | null;
  setIsTaskBarButtonClicked: (val: string | null) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsTaskBarButtonClicked(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsTaskBarButtonClicked]);

  if (!isTaskBarButtonClicked) return null;

  const items = taskBarMenus[isTaskBarButtonClicked] || [];

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 w-auto select-none text-nowrap m-px bg-stone-200 border border-black border-r-2 border-b-2 z-50"
    >
      {items.map((item, index) => {
        const isNewSet = index > 0 && items[index - 1].set !== item.set;

        return (
          <div key={item.ActionID}>
            {isNewSet && <div className="h-px bg-gray-400" />}

            <button
              disabled={item.disabled}
              className={`w-auto text-xs text-left flex place-items justify-between
                ${item.disabled ? "text-gray-400" : "text-black hover:bg-black hover:text-white"}
              `}
            >
              <div>
                {item.checked && "✔ "}
                {item.icon && <item.icon className="w-4 h-4 inline" />}
              </div>
              <div>
                <span>{item.text}</span>
              </div>
              <div>
                {item.shortcut && (
                  <span className="text-xs">{item.shortcut}</span>
                )}
                {item.hasSubmenu && <span className="text-xs">▶</span>}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
