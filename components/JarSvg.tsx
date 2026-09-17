"use client";

type JarSvgProps = {
  pct: number;
  color: string;
};

export default function JarSvg({ pct, color }: JarSvgProps) {
  const cappedPct = Math.min(pct, 150);
  const fillFrac = cappedPct / 150;
  const jarTop = 22;
  const jarBottom = 128;
  const maxFillHeight = jarBottom - jarTop;
  const fillHeight = maxFillHeight * fillFrac;
  const fillY = jarBottom - fillHeight;

  return (
    <svg viewBox="0 0 100 130" className="h-[150px] w-[120px]">
      <defs>
        <clipPath id="jarClip">
          <path d="M30 10 H70 V22 C70 22 82 30 82 55 V112 C82 122 74 128 64 128 H36 C26 128 18 122 18 112 V55 C18 30 30 22 30 22 Z" />
        </clipPath>
      </defs>
      <path
        d="M30 10 H70 V22 C70 22 82 30 82 55 V112 C82 122 74 128 64 128 H36 C26 128 18 122 18 112 V55 C18 30 30 22 30 22 Z"
        fill="#fff"
        stroke="#4A2E52"
        strokeWidth="3"
      />
      <rect
        x="18"
        y={fillY}
        width="64"
        height={fillHeight}
        fill={color}
        clipPath="url(#jarClip)"
        style={{ transition: "y .5s ease, height .5s ease, fill .5s ease" }}
      />
      <rect x="30" y="4" width="40" height="10" rx="3" fill="#4A2E52" />
    </svg>
  );
}
