export default function TaskBarButton({ element }: { element: any }) {
  return (
    <button
      key={element.name}
      className="flex items-center gap-1 leading-none hover:bg-black hover:text-white m-px px-1.5 py-0.5"
    >
      {element.display === "both" ? (
        <>
          {element.icon && <element.icon className="w-4 h-4" />}
          <span>{element.text || element.name}</span>
        </>
      ) : element.display === "icon" && element.icon ? (
        <element.icon className="w-4 h-4" />
      ) : (
        element.text || element.name
      )}
    </button>
  );
}
