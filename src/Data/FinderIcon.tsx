import { useId, type SVGProps } from "react";

const VIEW_W = 140.78;
const VIEW_H = 150.2;

const COLORS = {
  shade: "#4963cd",
  light: "#87a5d6",
  navy: "#000188",
  ink: "#020310",
  inkEye: "#000009",
} as const;

const NOSE =
  "M91.55 2.4 C74.84 21.25 57.55 50.55 56.36 82.67 H81.83 C75.85 110.98 79.96 130.21 89.45 148.66";

const LIGHT_HALF = `${NOSE} H200 V2.4 Z`;

const MOUTH = "M21.79 96.96 C51.05 112.21 93.97 109.38 118.08 97.11";

export interface FinderIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "width" | "height" | "viewBox"
> {
  size?: number | string;
  title?: string;
}

export function FinderIcon({
  size = 128,
  title = "Finder",
  ...props
}: FinderIconProps) {
  const uid = useId().replace(/:/g, "");
  const face = `${uid}-face`;
  const leftOfNose = `${uid}-left`;
  const rightOfNose = `${uid}-right`;
  const decorative = title === "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      width={size}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      overflow="visible"
      {...props}
    >
      {!decorative && <title>{title}</title>}

      <defs>
        <clipPath id={face}>
          <rect x="0" y="20.11" width="140.78" height="111.12" />
        </clipPath>
        <clipPath id={leftOfNose}>
          <rect x="0" y="0" width="79.5" height={VIEW_H} />
        </clipPath>
        <clipPath id={rightOfNose}>
          <rect x="79.5" y="0" width="200" height={VIEW_H} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${face})`}>
        <rect width={VIEW_W} height={VIEW_H} fill={COLORS.shade} />
        <path d={LIGHT_HALF} fill={COLORS.light} />
      </g>

      <rect
        x="33.74"
        y="36.07"
        width="7.81"
        height="17.69"
        fill={COLORS.navy}
      />
      <rect
        x="93.25"
        y="35.85"
        width="7.98"
        height="18.01"
        fill={COLORS.inkEye}
      />

      <path
        d={MOUTH}
        fill="none"
        stroke={COLORS.navy}
        strokeWidth="6.6"
        strokeLinecap="butt"
        clipPath={`url(#${leftOfNose})`}
      />
      <path
        d={MOUTH}
        fill="none"
        stroke={COLORS.ink}
        strokeWidth="6.6"
        strokeLinecap="butt"
        clipPath={`url(#${rightOfNose})`}
      />

      <path
        d={NOSE}
        fill="none"
        stroke={COLORS.ink}
        strokeWidth="6.6"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        strokeLinecap="butt"
      />
    </svg>
  );
}

export default FinderIcon;
