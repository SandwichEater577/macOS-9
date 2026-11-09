import type { SVGProps } from "react";

/** Artwork size in viewBox units. Tight crop: no padding, no background. */
const VIEW_W = 70.17;
const VIEW_H = 70.19;

const COLORS = {
  /** Thin dark rim along the two diagonals that carry no bevel. */
  rim: "#84005a",
  /** Top-left bevel: a thin dark line, then a bright highlight. */
  highlightEdge: "#c50214",
  highlight: "#f44379",
  /** Bottom-right bevel: a dark outer line, then a deep magenta shade. */
  shadowEdge: "#3c1d57",
  shadow: "#8b0960",
  /** Flat red face of the sign. */
  face: "#d80203",
  /** Fingers are a touch deeper than the palm. */
  finger: "#f2c18c",
  palm: "#f9c995",
} as const;

const OCTAGON =
  "51.56,0 70.17,18.62 70.17,51.58 51.56,70.19 18.62,70.19 0,51.58 0,18.62 18.62,0";
const HIGHLIGHT_EDGE =
  "51.56,0 18.62,0 0,18.62 0,51.58 5.1,56.68 5.1,20.46 20.56,5.01 56.56,5.01";
const HIGHLIGHT =
  "53.36,1.8 19.36,1.8 1.8,19.36 1.8,53.38 5.1,56.68 5.1,20.46 20.56,5.01 56.56,5.01";
const SHADOW_EDGE =
  "70.17,18.62 70.17,51.58 51.56,70.19 18.62,70.19 14.58,66.16 51.61,66.16 65.9,51.87 65.9,14.34";
const SHADOW =
  "68.37,16.82 68.37,50.83 50.81,68.39 16.82,68.39 14.58,66.16 51.61,66.16 65.9,51.87 65.9,14.34";
const FACE =
  "55.01,5.01 65.9,15.89 65.9,51.87 51.61,66.16 16.13,66.16 5.1,55.12 5.1,20.46 20.56,5.01";

/** Palm and thumb as one outline, drawn over the finger bases. */
const PALM =
  "M17.59 33.83 L41.13 29.6 L41.19 33.63 C41.19 35.33 43.3 38.22 45 38.22 L50.38 32.3 C52.55 31.3 54.33 29.14 55.08 33.41 L44.65 54.06 C44.1 55.04 41.22 58.82 40.14 58.82 L27.45 58.82 C21.49 58.82 17.67 47.96 17.67 45.24Z";

export interface StopIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "width" | "height" | "viewBox"
> {
  /** Rendered width in px (or any CSS length). Height follows the aspect ratio. */
  size?: number | string;
  /** Accessible label (not drawn on the icon). Pass "" to mark it decorative. */
  title?: string;
}

export function StopIcon({
  size = 96,
  title = "Stop",
  ...props
}: StopIconProps) {
  const decorative = title === "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      width={size}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      {...props}
    >
      {!decorative && <title>{title}</title>}

      {/* Sign: rim, then the bevel, then the flat face */}
      <polygon points={OCTAGON} fill={COLORS.rim} />
      <polygon points={HIGHLIGHT_EDGE} fill={COLORS.highlightEdge} />
      <polygon points={HIGHLIGHT} fill={COLORS.highlight} />
      <polygon points={SHADOW_EDGE} fill={COLORS.shadowEdge} />
      <polygon points={SHADOW} fill={COLORS.shadow} />
      <polygon points={FACE} fill={COLORS.face} />

      {/* Hand: four fingers, then palm and thumb on top */}
      <rect
        x="17.56"
        y="19.5"
        width="3.89"
        height="14.18"
        rx="0.94"
        fill={COLORS.finger}
      />
      <rect
        x="24.11"
        y="13.16"
        width="4.05"
        height="20.51"
        rx="0.94"
        fill={COLORS.finger}
      />
      <rect
        x="30.73"
        y="8.54"
        width="3.84"
        height="25.14"
        rx="0.94"
        fill={COLORS.finger}
      />
      <rect
        x="37.22"
        y="13.16"
        width="4.12"
        height="20.52"
        rx="0.94"
        fill={COLORS.finger}
      />
      <path d={PALM} fill={COLORS.palm} />
    </svg>
  );
}

export default StopIcon;
