export default function Logo({ height = 22 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ValentineCodes logo"
    >
      <g stroke="#2dd4a7" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M34 10 L12 38 L34 66" />
        <path d="M130 10 L152 38 L130 66" />
        <path d="M98 68 L114 8" />
      </g>
      <path d="M44 10 L58 10 L68 44 L78 10 L92 10 L75 66 L61 66 Z" fill="#e8edf4" />
    </svg>
  );
}
