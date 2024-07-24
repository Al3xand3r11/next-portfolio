import type { Metadata } from "next";
import { Knewave } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Brandon Nance Portfolio",
  description: "Next.Js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={knewave.className}>{children}</body>
    </html>
  );
}
