import { useState, useEffect } from "react";
import TaskBarButton from "./TaskBarButton";
import TaskBarDropMenu from "./TaskBarDropMenu";
import { leftTaskBarItems, rightTaskBarItems } from "../../Data/taskbarData.ts";

export default function Taskbar({
  isTaskBarButtonClicked,
  setIsTaskBarButtonClicked,
}: {
  isTaskBarButtonClicked: any;
  setIsTaskBarButtonClicked: any;
}) {
  const [clockDisplayFormat, setClockDisplayFormat] = useState<"time" | "date">(
    "time",
  );

  const [showFinderText, setShowFinderText] = useState(true);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
  );

  const [date, setDate] = useState(
    new Date().toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }),
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

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(
        new Date().toLocaleDateString([], {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }),
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const rightItems = rightTaskBarItems(time, date);

  return (
    <>
      <div className="select-none rounded-xl rounded-b-none w-10/12 h-auto flex flex-row bg-stone-200 border border-solid border-black font-bold">
        <div className="pl-4 flex flex-row gap-2 font-weight-inherit">
          {leftTaskBarItems.map((element) => {
            return (
              <TaskBarButton
                key={element.name}
                clockDisplayFormat={clockDisplayFormat}
                setClockDisplayFormat={setClockDisplayFormat}
                isTaskBarButtonClicked={isTaskBarButtonClicked}
                setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
                showFinderText={showFinderText}
                setShowFinderText={setShowFinderText}
                element={element}
              />
            );
          })}
        </div>

        <div className="pr-4 flex flex-row gap-2 font-weight-inherit items-start ml-auto">
          {rightItems.map((element) => {
            return (
              <TaskBarButton
                key={element.name}
                clockDisplayFormat={clockDisplayFormat}
                setClockDisplayFormat={setClockDisplayFormat}
                isTaskBarButtonClicked={isTaskBarButtonClicked}
                setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
                showFinderText={showFinderText}
                setShowFinderText={setShowFinderText}
                element={element}
              />
            );
          })}
        </div>
      </div>
      <TaskBarDropMenu
        isTaskBarButtonClicked={isTaskBarButtonClicked}
        setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
      />
    </>
  );
}
