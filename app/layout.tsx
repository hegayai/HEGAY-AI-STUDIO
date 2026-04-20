import type { Metadata } from "next";
import "./globals.css";
import AppFrame from "./components/AppFrame";

export const metadata: Metadata = {
  title: "Hegay OS Supreme",
  description: "Creative Civilization Operating System for Origin Systems, Pantheons, and Infinite Expansion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          antialiased
          bg-black
          text-[var(--platinum)]
        "
      >
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
