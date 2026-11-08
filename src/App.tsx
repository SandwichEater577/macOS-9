import Main from "./components/main/Main";
import { useState } from "react";
import TaskBar from "./components/taskbar/TaskBar";
import Boot from "./Boot";
import { initialWindows, type WindowState } from "./Data/windowsData";

export default function App() {
  const [isTaskBarButtonClicked, setIsTaskBarButtonClicked] = useState<
    string | null
  >(null);
  const [atBoot, setAtBoot] = useState(true);

  const [windows, setWindows] =
    useState<Record<string, WindowState>>(initialWindows);
  const [topZ, setTopZ] = useState(10);

  const openApp = (appId: string) => {
    if (!windows[appId]) return;
    const newZ = topZ + 1;
    setTopZ(newZ);
    setWindows((prev) => ({
      ...prev,
      [appId]: { ...prev[appId], isOpen: true, isShaded: false, z: newZ },
    }));
  };

  const closeApp = (appId: string) => {
    setWindows((prev) => ({
      ...prev,
      [appId]: { ...prev[appId], isOpen: false },
    }));
  };

  const focusApp = (appId: string) => {
    if (windows[appId].z === topZ) return;
    const newZ = topZ + 1;
    setTopZ(newZ);
    setWindows((prev) => ({
      ...prev,
      [appId]: { ...prev[appId], z: newZ },
    }));
  };

  const updateApp = (appId: string, updates: Partial<WindowState>) => {
    setWindows((prev) => ({
      ...prev,
      [appId]: { ...prev[appId], ...updates },
    }));
  };

  return atBoot ? (
    <Boot setAtBoot={setAtBoot} />
  ) : (
    <div className="overflow-hidden flex flex-col items-center w-screen h-screen bg-black">
      <TaskBar
        isTaskBarButtonClicked={isTaskBarButtonClicked}
        setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
        onOpenApp={openApp}
      />
      <Main
        windows={windows}
        onUpdate={updateApp}
        onClose={closeApp}
        onFocus={focusApp}
      />
    </div>
  );
}
