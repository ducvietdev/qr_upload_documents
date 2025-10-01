import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trường Sĩ Quan Pháo Binh - Hệ thống chia sẻ tài liệu",
  description: "Hệ thống chia sẻ tài liệu điện tử của Trường Sĩ Quan Pháo Binh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <ClientLayout>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
