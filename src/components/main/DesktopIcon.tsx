type Props = {
  iconPath: string;
  label: string;
  className?: string;
};

export default function DesktopIcon({
  iconPath,
  label,
  className = "",
}: Props) {
  return (
    <div
      className={`absolute flex flex-col items-center cursor-default select-none ${className}`}
    >
      <img
        src={iconPath}
        alt={label}
        className="w-12 h-12 object-contain pointer-events-none"
      />
      <span className="bg-white text-black text-[11px] font-bold px-1 mt-1 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
