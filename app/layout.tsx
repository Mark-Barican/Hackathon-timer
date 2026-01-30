import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mask | Hackathon ends February 1, 2026",
  description: "Theme: Mask. Countdown to hackathon end — February 1, 2026 at 10:00 AM.",
  openGraph: {
    title: "Mask | Hackathon ends February 1, 2026",
    description: "Countdown to hackathon end — February 1, 2026 at 10:00 AM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--color-hack-bg)] text-[var(--color-hack-text)] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
