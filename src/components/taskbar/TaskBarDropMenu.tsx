import { useEffect, useRef, useState } from "react";
import { taskBarMenus, subMenus } from "../../Data/taskbarData";
import type { TaskBarWindowsItem } from "../../Data/taskbarData";

export default function TaskBarDropMenu({
  isTaskBarButtonClicked,
  setIsTaskBarButtonClicked,
}: {
  isTaskBarButtonClicked: string | null;
  setIsTaskBarButtonClicked: (val: string | null) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const submenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setActiveSubmenu(null);
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
  }, [isTaskBarButtonClicked]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsTaskBarButtonClicked(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, [setIsTaskBarButtonClicked]);

  if (!isTaskBarButtonClicked) return null;

  const items = taskBarMenus[isTaskBarButtonClicked] || [];
  const isFinder = isTaskBarButtonClicked === "Finder";
  const positionClass = isFinder ? "right-0" : "left-0";

  const handleItemMouseEnter = (item: TaskBarWindowsItem) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);

    if (item.hasSubmenu && item.pointActionID) {
      submenuTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(item.pointActionID!);
      }, 400);
    } else {
      setActiveSubmenu(null);
    }
  };

  const handleItemMouseLeave = () => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
  };

  return (
    <div
      ref={menuRef}
      onMouseLeave={() => setActiveSubmenu(null)}
      className={`absolute top-full ${positionClass} w-auto select-none text-nowrap m-px bg-stone-200 border-2 border-b-stone-400 border-r-stone-400 border-t-stone-100 border-l-stone-100 outline-2 outline-black z-50`}
    >
      {items.map((item, index) => {
        const isNewSet = index > 0 && items[index - 1].set !== item.set;

        return (
          <div
            key={item.ActionID}
            className="relative"
            onMouseEnter={() => handleItemMouseEnter(item)}
            onMouseLeave={handleItemMouseLeave}
          >
            {isNewSet && <div className="h-px bg-gray-500" />}
            {isNewSet && <div className="h-px bg-gray-100" />}

            <div
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                if (!item.hasSubmenu) {
                  setIsTaskBarButtonClicked(null);
                }
              }}
              className={`w-full flex items-center px-2 py-0.5 cursor-default
                ${item.disabled ? "text-gray-400" : "text-black hover:bg-blue-700 hover:text-white"}
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

            {item.hasSubmenu &&
              item.pointActionID &&
              activeSubmenu === item.pointActionID &&
              subMenus[item.pointActionID] && (
                <div
                  className="absolute top-0 left-full -ml-4 pl-4 z-50"
                  onMouseEnter={() => {
                    if (submenuTimeoutRef.current)
                      clearTimeout(submenuTimeoutRef.current);
                  }}
                >
                  <div className="w-auto select-none text-nowrap m-px bg-stone-200 border-2 border-b-stone-400 border-r-stone-400 border-t-stone-100 border-l-stone-100 outline-2 outline-black">
                    {subMenus[item.pointActionID].map((subItem, subIndex) => {
                      const isSubNewSet =
                        subIndex > 0 &&
                        subMenus[item.pointActionID!][subIndex - 1].set !==
                          subItem.set;

                      return (
                        <div key={subItem.ActionID}>
                          {isSubNewSet && <div className="h-px bg-gray-500" />}
                          {isSubNewSet && <div className="h-px bg-gray-100" />}

                          <div
                            onMouseDown={(e) => e.stopPropagation()}
                            onClick={() => {
                              if (!subItem.hasSubmenu) {
                                setIsTaskBarButtonClicked(null);
                              }
                            }}
                            className={`w-full flex items-center px-2 py-0.5 cursor-default
                              ${subItem.disabled ? "text-gray-400" : "text-black hover:bg-blue-700 hover:text-white"}
                            `}
                          >
                            <div className="flex items-center justify-start w-4 h-4 shrink-0">
                              {subItem.checked && <span>✔</span>}
                              {subItem.icon && (
                                <subItem.icon className="w-full h-full" />
                              )}
                            </div>

                            <div className="flex-1 text-left min-w-32">
                              <span>{subItem.text}</span>
                            </div>

                            <div className="flex items-center justify-end w-8 h-4 shrink-0">
                              {subItem.shortcut && (
                                <span>{subItem.shortcut}</span>
                              )}
                              {subItem.hasSubmenu && <span>▶</span>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}
