import { useState } from "react";

export default function ProfilerNetwork({ rows }: { rows: any }) {
  const [collapsedSubs, setCollapsedSubs] = useState<Record<string, boolean>>(
    {},
  );

  const toggleSub = (title: string) => {
    setCollapsedSubs((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="ml-4 flex flex-col gap-2 mb-2">
      {rows.map((row: any, rIndex: number) => {
        if (row.type === "grid") {
          return (
            <div key={rIndex} className="grid grid-cols-4 gap-x-4">
              {row.rows.map((gRow: any, gIndex: number) => (
                <div key={gIndex} className="contents">
                  <div className="col-span-2 flex gap-4">
                    <span className="w-32">{gRow[0].label}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>{gRow[1].label}</span>
                    <span className="font-normal">{gRow[1].value}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>{gRow[2].label}</span>
                    <span className="font-normal">{gRow[2].value}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        if (row.type === "row-list") {
          const isSubCollapsed = collapsedSubs[row.title];

          return (
            <div key={rIndex} className="mt-2">
              <div
                className="flex items-center gap-1 mb-1 cursor-default"
                onClick={() => toggleSub(row.title)}
              >
                {row.toggle ? (
                  <span className="text-blue-900 text-[10px]">
                    {isSubCollapsed ? "▶" : "▼"}
                  </span>
                ) : (
                  <span className="w-2" />
                )}
                <span className="w-32">{row.title}</span>
                {row.header.map((element: any, hIndex: number) => (
                  <div key={hIndex} className="flex gap-2 ml-4">
                    <span>{element.label}</span>
                    <span className="font-normal">{element.value}</span>
                  </div>
                ))}
              </div>
              {row.rows && !isSubCollapsed && (
                <div className="ml-4 border-t border-stone-400 pt-1 flex flex-col gap-1">
                  {row.rows.map((element: any, rI: number) => (
                    <div key={rI} className="flex gap-4 w-150">
                      <span className="w-32">{element.label}</span>
                      <span className="font-normal whitespace-pre-wrap flex-1">
                        {element.value}
                      </span>
                      {element.extra && (
                        <div className="flex gap-4 w-64">
                          <span className="w-32">{element.extra.label}</span>
                          <span className="font-normal">
                            {element.extra.value}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
