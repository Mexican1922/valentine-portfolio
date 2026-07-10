export default function Logo({ height = 24 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 170 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ValentineCodes logo"
    >
      <defs>
        <linearGradient id="vcGrad" x1="0" y1="0" x2="170" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4ce0b8" />
          <stop offset="1" stopColor="#17b894" />
        </linearGradient>
      </defs>
      <path
        d="M143 25 A30 30 0 1 0 143 71"
        stroke="url(#vcGrad)"
        strokeWidth="20"
        strokeLinecap="butt"
      />
      <path
        d="M8 12 L34 12 L52 62 L70 12 L96 12 L62 84 L42 84 Z"
        fill="url(#vcGrad)"
        stroke="#0b0f14"
        strokeWidth="6"
        strokeLinejoin="miter"
        paintOrder="stroke"
      />
    </svg>
  );
}
