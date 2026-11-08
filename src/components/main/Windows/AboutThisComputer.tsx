import { useState, useEffect } from "react";
import HappyMac from "../../../Data/FinderIcon";
import FinderIcon from "../../../Data/FinderIcon";

export default function AboutThisComputer() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/version.txt")
      .then((response) => response.text())
      .then((text) => setVersion(text.trim()))
      .catch(() => setVersion("9.0.4"));
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-stone-200 p-1 select-none">
      <div className="border border-black bg-white flex items-center justify-center py-6">
        <HappyMac className="w-24 h-24 mr-2" />
        <span className="font-serif text-7xl leading-none tracking-tighter">
          Mac OS 9
        </span>
      </div>

      <div className="grid grid-cols-2 text-xs font-bold py-1 px-1">
        <div className="flex gap-2">
          <span>Version:</span>
          <span className="font-normal">React Mac OS {version}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-normal">PowerPC Enabler {version}</span>
        </div>

        <div className="flex gap-2">
          <span>Built-in Memory:</span>
          <span className="font-normal">67 GB</span>
        </div>
        <div></div>

        <div className="flex gap-2">
          <span>Virtual Memory:</span>
          <span className="font-normal">Off</span>
        </div>
        <div></div>

        <div className="flex gap-2">
          <span>Largest Unused Block:</span>
          <span className="font-normal">67.67 MB</span>
        </div>
        <div className="flex justify-end items-end font-normal text-[10px]">
          Ouro © 2026
        </div>
      </div>

      <div className="border border-black bg-stone-200 flex flex-col flex-1">
        <div className="border-b border-black flex items-center p-1 gap-2">
          <FinderIcon className="w-4 h-4" />
          <span className="flex-1 text-xs">Mac OS</span>
          <span className="text-xs w-16 text-right">67 TB</span>
          <div className="w-48 h-3.5 border border-black bg-stone-200 p-px">
            <div className="h-full w-full bg-blue-600 border border-black"></div>
          </div>
        </div>

        <div className="border-b border-black flex items-center p-1 gap-2">
          <div className="w-4 h-4 bg-yellow-300 border border-black flex items-center justify-center text-[8px]">
            F
          </div>
          <span className="flex-1 text-xs">Freakery</span>
          <span className="text-xs w-16 text-right">67 B</span>
          <div className="w-48 h-3.5 border border-black bg-stone-200 p-px">
            <div className="h-full w-4 bg-blue-600 border border-black"></div>
          </div>
        </div>

        <div className="flex-1 bg-stone-200"></div>
      </div>
    </div>
  );
}
