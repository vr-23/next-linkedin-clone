import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkedIn Clone",
  description: "Building LinkedIn clone using Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
      >
        {/* Toaster */}
        {/* Header */}
        <header className="border-b sticky top-0 bg-white z-50">
          <Header />
        </header>

        <div className="bg-[#F4F2ED] flex-1 w-full">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
