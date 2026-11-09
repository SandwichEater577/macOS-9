import { useState } from "react";
import ProfilerSection from "./Profiler/ProfilerSection";
import ErrorDialog from "./ErrorDialog";

export default function AppleSystemProfiler({ content }: { content: any }) {
  const [activeTab, setActiveTab] = useState(content.tabs[0]);
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (title: string) => {
    setCollapsedSections((prev) => ({ ...prev, [title]: !prev[title] }));
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
          content.systemProfile.map((section: any, index: number) => (
            <ProfilerSection
              key={index}
              section={section}
              isCollapsed={!!collapsedSections[section.title]}
              onToggle={() => toggleSection(section.title)}
            />
          ))}

        {activeTab !== "System Profile" && (
          <div className="flex-1 flex items-center justify-center">
            <ErrorDialog message={`Couldn't Find the Server "${activeTab}"`} />
          </div>
        )}
      </div>
    </div>
  );
}
