import Main from "./components/main/Main";
import { useState } from "react";
import TaskBar from "./components/taskbar/TaskBar";

export default function App() {
  const [isTaskBarButtonClicked, setIsTaskBarButtonClicked] = useState<
    string | null
  >(null);

  return (
    <div className=" overflow-hidden p-1 flex flex-col items-center w-screen h-screen bg-black">
      <TaskBar
        isTaskBarButtonClicked={isTaskBarButtonClicked}
        setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
      />
      <Main />
    </div>
  );
}
