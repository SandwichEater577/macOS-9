export default function ProfilerList({
  rows,
  note,
}: {
  rows: any;
  note?: string;
}) {
  return (
    <>
      <div className="ml-4 flex flex-col gap-1">
        {rows.map((row: any, rIndex: number) => (
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
      maybe
      {note && <div className="ml-4 font-normal mt-2">{note}</div>}
    </>
  );
}
