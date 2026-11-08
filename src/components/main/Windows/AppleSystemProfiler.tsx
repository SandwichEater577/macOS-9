import { useState } from "react";

const tabs = [
  "System Profile",
  "Devices and Volumes",
  "Control Panels",
  "Extensions",
  "Applications",
  "System Folders",
];

export default function AppleSystemProfiler() {
  const [activeTab, setActiveTab] = useState("System Profile");

  return (
    <div className="flex flex-col w-full h-full bg-stone-200 select-none text-[11px] font-bold">
      <div className="flex px-2 pt-2 border-b border-black bg-stone-300 gap-1">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border border-black border-b-0 px-3 py-1 rounded-t-sm cursor-default ${
              activeTab === tab
                ? "bg-white relative -bottom-[1px] z-10"
                : "bg-stone-200 hover:bg-stone-100"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-2 overflow-auto flex flex-col relative z-0">
        {activeTab === "System Profile" && (
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-blue-900 text-[10px]">▼</span>
                <span>Software overview</span>
              </div>
              <div className="ml-4 border border-stone-400 p-2 relative mb-2 bg-stone-200/50">
                <span className="absolute -top-2 left-2 bg-white px-1 text-stone-600 font-normal">
                  Mac OS overview
                </span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex justify-between w-48">
                    <span>Finder:</span>
                    <span className="font-normal">9.0</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>QuickTime:</span>
                    <span className="font-normal">4.1</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>System:</span>
                    <span className="font-normal">9.0.4 US</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>File sharing:</span>
                    <span className="font-normal">is off</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Active enabler:</span>
                    <span className="font-normal">PowerPC Enabler 9.0.4</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Multiple Users:</span>
                    <span className="font-normal">1.1</span>
                  </div>
                </div>
              </div>
              <div className="ml-4 font-normal mb-4">
                Note: No startup disk was selected.
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-blue-900 text-[10px]">▼</span>
                <span>Memory overview</span>
              </div>
              <div className="ml-4 flex flex-col gap-1">
                <div className="flex gap-4">
                  <span className="w-32">Disk cache:</span>
                  <span className="font-normal">7.96 MB</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-32">Virtual memory:</span>
                  <span className="font-normal">is off</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-32 flex items-center gap-1">
                    <span className="text-blue-900 text-[10px]">▶</span>{" "}
                    Built-in memory:
                  </span>
                  <span className="font-normal">256 MB</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-32">External L2 cache:</span>
                  <span className="font-normal">256 MB</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-blue-900 text-[10px]">▼</span>
                <span>Hardware overview</span>
              </div>
              <div className="ml-4 flex gap-12">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4">
                    <span className="w-28">Machine ID:</span>
                    <span className="font-normal">67</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-28">Model name:</span>
                    <span className="font-normal">
                      Power Macintosh 9500 series
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-28">Keyboard type:</span>
                    <span className="font-normal">
                      Apple Extended Keyboard (ISO)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 border-l border-stone-400 pl-4">
                  <div className="flex gap-2">
                    <span>Processor info:</span>
                    <span className="font-normal">PowerPC G4</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Machine speed:</span>
                    <span className="font-normal">100 MHz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-1">
                <span className="text-blue-900 text-[10px]">▶</span>
                <span>Network overview</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Printer overview</span>
                <span className="font-normal mr-32">
                  Note: No printer has been chosen.
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-900 text-[10px]">▶</span>
                <span>Production information</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Devices and Volumes" && (
          <div className="p-4 font-normal">Devices and Volumes content...</div>
        )}
        {activeTab === "Control Panels" && (
          <div className="p-4 font-normal">Control Panels content...</div>
        )}
        {activeTab === "Extensions" && (
          <div className="p-4 font-normal">Extensions content...</div>
        )}
        {activeTab === "Applications" && (
          <div className="p-4 font-normal">Applications content...</div>
        )}
        {activeTab === "System Folders" && (
          <div className="p-4 font-normal">System Folders content...</div>
        )}
      </div>
    </div>
  );
}
