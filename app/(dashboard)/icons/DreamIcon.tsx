export default function DreamIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30 60 C10 40, 40 10, 60 30 C80 50, 60 80, 40 70" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}
