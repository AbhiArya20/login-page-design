import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthLeft from "@/components/auth-layout/left";
import AuthRight from "@/components/auth-layout/right";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coderoom",
  description:
    "Coderoom is a platform that allows you to create and manage your coderooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-screen h-screen bg-orange-500 select-none">
          <div className="flex items-center h-full w-full">
            <div className="h-full md:w-1/2 lg:w-3/5 bg-black hidden md:block">
              <AuthLeft />
            </div>
            <AuthRight>{children}</AuthRight>
          </div>
        </main>
        <Toaster gutter={5} />
      </body>
    </html>
  );
}
