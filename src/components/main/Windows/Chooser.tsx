import { useState } from "react";
import ErrorDialog from "./ErrorDialog";

export default function Chooser() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <div className="relative flex flex-row w-full h-full bg-stone-200 p-2 gap-2 select-none font-bold text-[11px]">
      <div className="flex flex-row w-[45%] border-2 border-black bg-white overflow-hidden">
        <div className="flex-1 flex flex-col p-2 overflow-y-auto">
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="flex flex-col items-center justify-center gap-1 w-16 cursor-default"
          >
            <img
              src="/icon-assets/png64px/81.png"
              alt="AppleShare"
              className="w-10 h-10"
            />
            <span
              className={isClicked ? "bg-black text-white px-1" : "text-black"}
            >
              AppleShare
            </span>
          </button>
        </div>
        <div className="w-4.5 bg-stone-200 border-l border-black flex flex-col justify-between">
          <div className="h-4 border-b border-black flex items-center justify-center text-[8px]">
            ▲
          </div>
          <div className="h-4 border-t border-black flex items-center justify-center text-[8px]">
            ▼
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          {isClicked && (
            <div className="text-[12px] mb-1">Select a file server:</div>
          )}

          <div className="flex flex-row flex-1 border-2 border-black bg-white overflow-hidden">
            <div className="flex-1"></div>
            <div className="w-4.5 bg-stone-200 border-l border-black flex flex-col justify-between">
              <div className="h-4 border-b border-black flex items-center justify-center text-[8px]">
                ▲
              </div>
              <div className="h-4 border-t border-black flex items-center justify-center text-[8px]">
                ▼
              </div>
            </div>
          </div>

          <div
            className={`flex justify-end gap-2 mt-1 ${!isClicked ? "hidden" : ""}`}
          >
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-2 py-0.5 border-2 border-black bg-stone-200 text-[11px]"
            >
              Server IP Address...
            </button>
            <button className="px-6 py-0.5 border-2 border-black bg-stone-200 text-gray-500 text-[11px]">
              OK
            </button>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-stone-400 mt-1 pt-1 px-1">
          <div className="flex items-center gap-6">
            <span className="text-[12px]">AppleTalk</span>

            <div className="flex flex-col gap-0.5">
              <label className="flex items-center gap-2 cursor-default">
                <div className="w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center"></div>
                <span className="text-[12px]">Active</span>
              </label>

              <label className="flex items-center gap-2 cursor-default">
                <div className="w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
                <span className="text-[12px]">Inactive</span>
              </label>
            </div>
          </div>

          <span className="text-[12px] pb-0.5">7.6.2</span>
        </div>
      </div>

      {isDialogOpen && (
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-50">
          <ErrorDialog
            title="Enter the Server Address:"
            icon={
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <polygon
                  points="50,5 95,90 5,90"
                  fill="#ffdf00"
                  stroke="#000"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <text
                  x="50"
                  y="80"
                  fontSize="50"
                  textAnchor="middle"
                  fill="#000"
                  fontWeight="bold"
                >
                  !
                </text>
              </svg>
            }
            actions={
              <>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-6 py-1 border border-black bg-stone-200 active:bg-stone-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-6 py-1 border-2 border-black bg-stone-200 active:bg-stone-300"
                >
                  Connect
                </button>
              </>
            }
          >
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className="w-full border-2 border-black bg-white px-2 py-1 outline-none font-bold"
                autoFocus
              />
              <div className="border-t border-stone-400 w-full" />
              <div className="leading-snug font-bold">
                Aliases made of this Server will fail if TCP/IP is not
                available.
              </div>
            </div>
          </ErrorDialog>
        </div>
      )}
    </div>
  );
}
