import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommitScore — Score commit quality & predict bug risk",
  description: "Analyzes GitHub commit messages, file changes, and patterns to score commit quality and predict which commits are likely to introduce bugs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e8e97af-e30b-4600-b396-f6acae9759ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
