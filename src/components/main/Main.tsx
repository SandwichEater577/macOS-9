import Window from "./Window";
import Desktop from "./Desktop.tsx";
import AboutThisComputer from "./Windows/AboutThisComputer";
import AppleSystemProfiler from "./Windows/AppleSystemProfiler";
import Calculator from "./Windows/Calculator";
import Chooser from "./Windows/Chooser";
import type { WindowState } from "../../Data/windowsData";
import Appearance from "./Windows/ControllerPanels/Appearance.tsx";

export default function Main({
  windows,
  onUpdate,
  onClose,
  onFocus,
}: {
  windows: Record<string, WindowState>;
  onUpdate: (id: string, updates: Partial<WindowState>) => void;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
}) {
  return (
    <div className="relative bg-indigo-400 h-full w-10/12 border rounded-xl rounded-t-none overflow-hidden">
      <Desktop />
      {Object.values(windows).map((windowState) => {
        if (!windowState.isOpen) return null;

        return (
          <Window
            key={windowState.id}
            data={windowState}
            onUpdate={(updates) => onUpdate(windowState.id, updates)}
            onClose={() => onClose(windowState.id)}
            onFocus={() => onFocus(windowState.id)}
          >
            {windowState.id === "about" && <AboutThisComputer />}
            {windowState.id === "profiler" && (
              <AppleSystemProfiler content={windowState.content} />
            )}
            {windowState.id === "calculator" && <Calculator />}
            {windowState.id === "chooser" && <Chooser />}
            {windowState.id === "appearance" && <Appearance />}
          </Window>
        );
      })}
    </div>
  );
}
