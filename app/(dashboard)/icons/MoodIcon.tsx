export default function MoodIcon({ size = 26 }) {
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
      <circle cx="50" cy="50" r="30" />
      <path d="M35 60 C45 70, 55 70, 65 60" />
      <circle cx="40" cy="45" r="4" fill="currentColor" />
      <circle cx="60" cy="45" r="4" fill="currentColor" />
    </svg>
  );
}
