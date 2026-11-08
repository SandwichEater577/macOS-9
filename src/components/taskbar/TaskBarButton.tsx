import TaskBarDropMenu from "./TaskBarDropMenu";

export default function TaskBarButton({
  clockDisplayFormat,
  setClockDisplayFormat,
  element,
  isTaskBarButtonClicked,
  setIsTaskBarButtonClicked,
  showFinderText,
  setShowFinderText,
  onOpenApp,
}: {
  clockDisplayFormat: "time" | "date";
  setClockDisplayFormat: (val: "time" | "date") => void;
  element: any;
  isTaskBarButtonClicked: any;
  setIsTaskBarButtonClicked: any;
  showFinderText: boolean;
  setShowFinderText: (val: boolean) => void;
  onOpenApp: (appId: string) => void;
}) {
  if (element.name === "FinderToggle") {
    return (
      <button
        onClick={() => setShowFinderText(!showFinderText)}
        className="h-full px-0.5 flex flex-col items-center justify-center bg-stone-200 hover:bg-stone-300 active:bg-stone-400 border-l border-r border-stone-400 outline-none focus:outline-none focus:ring-0 cursor-default"
      >
        <div className="flex flex-col gap-0.5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-1 h-px bg-stone-600" />
          ))}
        </div>
      </button>
    );
  }

  return (
    <div className="relative h-full flex items-center">
      <button
        key={element.name}
        onClick={() => {
          if (isTaskBarButtonClicked !== element.name) {
            if (element.name === "Time") {
              if (clockDisplayFormat === "time") {
                setClockDisplayFormat("date");
              } else {
                setClockDisplayFormat("time");
              }
              return;
            }
            setIsTaskBarButtonClicked(element.name);
          } else {
            setIsTaskBarButtonClicked(null);
          }
        }}
        className={`flex items-center gap-1 leading-none m-px px-1.5 py-0.5 outline-none focus:outline-none focus:ring-0 ${
          isTaskBarButtonClicked === element.name
            ? element.name === "Time"
              ? null
              : "bg-blue-700 text-white"
            : "bg-transparent text-black"
        }`}
      >
        {element.display === "both" ? (
          <>
            {element.icon && <element.icon className="w-4 h-4" />}
            {(element.name !== "Finder" || showFinderText) && (
              <span>{element.text || element.name}</span>
            )}
          </>
        ) : element.display === "icon" && element.icon ? (
          <element.icon className="w-4 h-4" />
        ) : element.name === "Time" ? (
          clockDisplayFormat === "time" ? (
            element.text
          ) : (
            element.date
          )
        ) : (
          element.text || element.name
        )}
      </button>

      {isTaskBarButtonClicked === element.name && (
        <TaskBarDropMenu
          isTaskBarButtonClicked={isTaskBarButtonClicked}
          setIsTaskBarButtonClicked={setIsTaskBarButtonClicked}
          onOpenApp={onOpenApp}
        />
      )}
    </div>
  );
}
