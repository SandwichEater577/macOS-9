export default function ProfilerGrid({ rows }: { rows: any }) {
  return (
    <div className="ml-4 flex flex-col gap-1">
      {rows.map((row: any, rIndex: number) => (
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
  );
}
