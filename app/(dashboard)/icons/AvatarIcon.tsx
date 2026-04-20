export default function AvatarIcon({ size = 26 }) {
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
      <circle cx="50" cy="35" r="18" />
      <path d="M20 85 C20 60, 80 60, 80 85" />
    </svg>
  );
}
