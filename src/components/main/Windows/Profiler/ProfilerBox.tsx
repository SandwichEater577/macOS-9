export default function ProfilerBox({
  boxTitle,
  rows,
}: {
  boxTitle: string;
  rows: any;
}) {
  return (
    <div className="ml-4 border border-stone-400 p-2 relative mb-2 bg-stone-200/50">
      <span className="absolute -top-2 left-2 bg-white px-1 text-stone-600 font-normal">
        {boxTitle}
      </span>
      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
        {rows.map((row: any, rIndex: number) => (
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
  );
}
