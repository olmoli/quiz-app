import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz Quest",
  description: "Test your knowledge with our fun video game trivia quiz!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Image
            src="/logo_quiz.jpg"
            alt="Famous computer games trivia"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </header>
        <div className="max-w-2xl mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
