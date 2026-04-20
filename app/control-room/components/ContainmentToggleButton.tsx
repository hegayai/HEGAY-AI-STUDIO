"use client";

export default function ContainmentToggleButton({
  active,
  onToggle,
}: {
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-[99999] px-5 py-3 rounded-full shadow-lg transition-all duration-300
        ${
          active
            ? "bg-purple-700 hover:bg-purple-600 text-white"
            : "bg-gray-800 hover:bg-gray-700 text-purple-300"
        }
      `}
    >
      {active ? "Disable Containment" : "Enable Containment"}
    </button>
  );
}
