import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farina Riaz | Web & Mobile Developer",
  description:
    "Portfolio of Farina Riaz, a Web and Mobile Developer with experience building modern, responsive web applications and mobile apps using React, React Native, Next.js, TypeScript, JavaScript, and modern UI technologies.",
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
