import { useState } from "react";

export default function AppleSystemProfiler({ content }: { content: any }) {
  const [activeTab, setActiveTab] = useState(content.tabs[0]);

  const renderSection = (section: any, index: number) => {
    return (
      <div key={index} className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-blue-900 text-[10px]">
            {section.toggle === "right" ? "▶" : "▼"}
          </span>
          <span>{section.title}</span>
        </div>

        {section.type === "box" && (
          <div className="ml-4 border border-stone-400 p-2 relative mb-2 bg-stone-200/50">
            <span className="absolute -top-2 left-2 bg-white px-1 text-stone-600 font-normal">
              {section.boxTitle}
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {section.rows.map((row: any, rIndex: number) => (
                <div key={rIndex} className="contents">
                  <div className="flex justify-between w-48">
                    <span>{row[0].label}</span>
                    <span className="font-normal">{row[0].value}</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>{row[1].label}</span>
                    <span className="font-normal">{row[1].value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section.note && (
          <div className="ml-4 font-normal mb-4">{section.note}</div>
        )}

        {section.type === "list" && (
          <div className="ml-4 flex flex-col gap-1">
            {section.rows.map((row: any, rIndex: number) => (
              <div key={rIndex} className="flex gap-4">
                <span className="w-32 flex items-center gap-1">
                  {row.toggle && (
                    <span className="text-blue-900 text-[10px]">
                      {row.toggle === "right" ? "▶" : "▼"}
                    </span>
                  )}
                  {row.label}
                </span>
                <span className="font-normal">{row.value}</span>
              </div>
            ))}
          </div>
        )}

        {section.type === "grid" && (
          <div className="ml-4 flex flex-col gap-1">
            {section.rows.map((row: any, rIndex: number) => (
              <div key={rIndex} className="flex gap-12">
                <div className="flex flex-col gap-1 w-64">
                  <div className="flex gap-4">
                    <span className="w-28">{row[0].label}</span>
                    <span className="font-normal">{row[0].value}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 border-l border-stone-400 pl-4">
                  <div className="flex gap-2">
                    <span>{row[1].label}</span>
                    <span className="font-normal">{row[1].value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.type === "network" && (
          <div className="ml-4 flex flex-col gap-2 mb-2">
            {section.rows.map((row: any, rIndex: number) => {
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
                return (
                  <div key={rIndex} className="mt-2">
                    <div className="flex items-center gap-1 mb-1">
                      {row.toggle ? (
                        <span className="text-blue-900 text-[10px]">▼</span>
                      ) : (
                        <span className="w-2" />
                      )}
                      <span className="w-32">{row.title}</span>
                      {row.header.map((h: any, hIndex: number) => (
                        <div key={hIndex} className="flex gap-2 ml-4">
                          <span>{h.label}</span>
                          <span className="font-normal">{h.value}</span>
                        </div>
                      ))}
                    </div>
                    {row.rows && (
                      <div className="ml-4 border-t border-stone-400 pt-1 flex flex-col gap-1">
                        {row.rows.map((r: any, rI: number) => (
                          <div key={rI} className="flex gap-4 w-150">
                            <span className="w-32">{r.label}</span>
                            <span className="font-normal whitespace-pre-wrap flex-1">
                              {r.value}
                            </span>
                            {r.extra && (
                              <div className="flex gap-4 w-64">
                                <span className="w-32">{r.extra.label}</span>
                                <span className="font-normal">
                                  {r.extra.value}
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
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-stone-200 select-none text-[11px] font-bold">
      <div className="flex px-2 pt-2 border-b border-black bg-stone-300 gap-1">
        {content.tabs.map((tab: string) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border border-black border-b-0 px-3 py-1 rounded-t-sm cursor-default ${
              activeTab === tab
                ? "bg-white relative -bottom-px z-10"
                : "bg-stone-200 hover:bg-stone-100"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-2 overflow-auto flex flex-col relative z-0">
        {activeTab === "System Profile" &&
          content.systemProfile.map((section: any, index: number) =>
            renderSection(section, index),
          )}
        {activeTab !== "System Profile" && (
          <div className="p-4 font-normal">{activeTab} content...</div>
        )}
      </div>
    </div>
  );
}
