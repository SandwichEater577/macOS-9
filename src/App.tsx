import Main from "./components/main/Main";
import { useState } from "react";
import TaskBar from "./components/taskbar/TaskBar";
import Boot from "./Boot";

export default function App() {
  const [isTaskBarButtonClicked, setIsTaskBarButtonClicked] = useState<
    string | null
  >(null);
  const [atBoot, setAtBoot] = useState(true);

  return atBoot ? (
    <Boot setAtBoot={setAtBoot} />
  ) : (
    <div className="overflow-hidden flex flex-col items-center w-screen h-screen bg-black">
      <TaskBar
        isTaskBarButtonClicked={isTaskBarButtonClicked}
        setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
      />
      <Main />
    </div>
  );
}
