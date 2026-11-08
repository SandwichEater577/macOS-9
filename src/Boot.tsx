import { useState, useEffect } from "react";
import FinderIcon from "./Data/FinderIcon";

export default function Boot({
  setAtBoot,
}: {
  setAtBoot: (val: boolean) => void;
}) {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(30);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(80);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(90);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(99);
    }, 3900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(100);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading === 100) {
      setAtBoot(false);
    }
  }, [loading, setAtBoot]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative flex flex-col items-center justify-center">
      <div
        className={`rounded-xl relative overflow-hidden p-1 flex flex-col w-10/12 h-screen ${loading > 30 ? "bg-indigo-400" : "bg-stone-300"} select-none`}
      >
        <div className="outline-3 border-2 border-b-stone-500 border-r-stone-500 border-l-stone-100 border-t-stone-100 absolute top-3/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-5/8 bg-stone-300">
          <div className="flex flex-col gap-10 items-center justify-center border-3 w-6/8 h-5/7 absolute top-3/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-100">
            <FinderIcon />
            <div className="flex flex-row items-center justify-center gap-1">
              <h1 className="font-serif! text-6xl text-black tracking-tight">
                Mac OS
              </h1>
              <h1 className="font-serif! text-6xl text-black tracking-tight -translate-y-2.5">
                9
              </h1>
            </div>
          </div>
          {loading < 30 ? (
            <p className="absolute bottom-[11%] w-full text-center text-sm font-bold">
              Welcome to React Mac OS 9
            </p>
          ) : (
            <div className="absolute bottom-[10%] w-full flex flex-col items-center">
              <p className="text-sm font-bold mb-1">Starting Up...</p>
              <div className="w-64 h-4 border border-black bg-white p-1">
                <div
                  className="h-full bg-blue-600 border border-black shadow-[inset_1px_1px_0px_#fff]"
                  style={{ width: `${loading}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
