import ProfilerBox from "./ProfilerBox";
import ProfilerList from "./ProfilerList";
import ProfilerGrid from "./ProfilerGrid";
import ProfilerNetwork from "./ProfilerNetwork";

export default function ProfilerSection({
  section,
  isCollapsed,
  onToggle,
}: {
  section: any;
  isCollapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-4">
      <div
        className="flex items-center gap-1 mb-2 cursor-default"
        onClick={onToggle}
      >
        <span className="text-blue-900 text-[10px]">
          {isCollapsed ? "▶" : "▼"}
        </span>
        <span>{section.title}</span>
      </div>

      {!isCollapsed && (
        <>
          {section.type === "box" && (
            <ProfilerBox boxTitle={section.boxTitle} rows={section.rows} />
          )}

          {section.note && (
            <div className="ml-4 font-normal mb-4">{section.note}</div>
          )}

          {section.type === "list" && <ProfilerList rows={section.rows} />}

          {section.type === "grid" && <ProfilerGrid rows={section.rows} />}

          {section.type === "network" && (
            <ProfilerNetwork rows={section.rows} />
          )}
        </>
      )}
    </div>
  );
}
