import type { Metadata } from "next";
import { inter } from "./components/ui/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "BeaconPulse ",
  description:
    "Mint, Earn, Compound, the one place to be to check on your electricity but first you should mint your own ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
