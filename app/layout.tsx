import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farina Riaz | Frontend Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
