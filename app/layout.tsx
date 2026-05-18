import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/portfolio.config";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
