import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Main } from "@/components/craft";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description: "A starter template for Next.js with WordPress as a headless CMS",
  metadataBase: new URL("https://wp.9d8.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head />
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <Main> {children} </Main>
      </body>
    </html>
  );
}
