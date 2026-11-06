import { useState, useEffect } from "react";
import TaskBarButton from "./TaskBarButton";
import { leftTaskBarItems, rightTaskBarItems } from "./../../data";

export default function Taskbar() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const rightItems = rightTaskBarItems(time);

  return (
    <>
      <div className="rounded-xl rounded-b-none w-10/12 h-auto flex flex-row bg-stone-200 border border-solid border-black font-bold">
        <div className="pl-4 flex flex-row gap-4 font-weight-inherit">
          {leftTaskBarItems.map((element) => {
            return <TaskBarButton element={element} />;
          })}
        </div>

        <div className="pr-4 flex flex-row gap-4 font-weight-inherit items-start ml-auto">
          {rightItems.map((element) => {
            return <TaskBarButton element={element} />;
          })}
        </div>
      </div>
    </>
  );
}
