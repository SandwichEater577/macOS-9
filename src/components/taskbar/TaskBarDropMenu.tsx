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

  const isFinder = isTaskBarButtonClicked === "Finder";
  const positionClass = isFinder ? "right-0" : "left-0";

  return (
    <div
      ref={menuRef}
      className={`absolute top-full ${positionClass} w-auto select-none text-nowrap m-px bg-stone-200 border-2 border-b-stone-400 border-r-stone-400 border-t-stone-100 border-l-stone-100 outline-2 outline-black z-50`}
    >
      {items.map((item, index) => {
        const isNewSet = index > 0 && items[index - 1].set !== item.set;

        return (
          <div key={item.ActionID}>
            {isNewSet && <div className="h-px bg-gray-500" />}
            {isNewSet && <div className="h-px bg-gray-100" />}

            <div
              className={`w-full flex items-center px-2 py-0.5
                ${item.disabled ? "text-gray-400" : "text-black hover:bg-black hover:text-white"}
              `}
            >
              <div className="flex items-center justify-start w-4 h-4 shrink-0">
                {item.checked && <span>✔</span>}
                {item.icon && <item.icon className="w-full h-full" />}
              </div>

              <div className="flex-1 text-left min-w-32">
                <span>{item.text}</span>
              </div>

              <div className="flex items-center justify-end w-8 h-4 shrink-0">
                {item.shortcut && <span>{item.shortcut}</span>}
                {item.hasSubmenu && <span>▶</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
