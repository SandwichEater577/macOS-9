import DesktopIcon from "./DesktopIcon.tsx";

export default function Desktop() {
  return (
    <>
      <DesktopIcon
        iconPath="/icons/png64px/1.png"
        label="Macintosh HD"
        className="top-4 right-4"
      />
      <DesktopIcon
        iconPath="/icons/png64px/7.png"
        label="Trash"
        className="bottom-4 right-4"
      />
      <DesktopIcon
        iconPath="/icons/png64px/34.png"
        label="Folder"
        className="top-4 left-4"
      />
    </>
  );
}
