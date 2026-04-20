export default function AestheticIcon({ size = 26 }) {
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
      <path d="M20 70 C40 20, 60 20, 80 70" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}
