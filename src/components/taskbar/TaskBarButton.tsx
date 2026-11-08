import TaskBarDropMenu from "./TaskBarDropMenu";

export default function TaskBarButton({
  clockDisplayFormat,
  setClockDisplayFormat,
  element,
  isTaskBarButtonClicked,
  setIsTaskBarButtonClicked,
  showFinderText,
  setShowFinderText,
}: {
  clockDisplayFormat: "time" | "date";
  setClockDisplayFormat: (val: "time" | "date") => void;
  element: any;
  isTaskBarButtonClicked: any;
  setIsTaskBarButtonClicked: any;
  showFinderText: boolean;
  setShowFinderText: (val: boolean) => void;
}) {
  return (
    <div className="relative h-full flex items-center">
      <button
        key={element.name}
        onClick={() => {
          if (element.name === "FinderToggle") {
            setShowFinderText(!showFinderText);
            return;
          }
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
        className={`flex items-center gap-1 leading-none m-px px-1.5 py-0.5 ${isTaskBarButtonClicked === element.name ? (element.name === "Time" ? null : " bg-blue-700 text-white") : "bg-transparent text-black"}`}
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
        <TaskBarDropMenu isTaskBarButtonClicked={isTaskBarButtonClicked} />
      )}
    </div>
  );
}
