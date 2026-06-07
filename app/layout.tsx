import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ここは、SEOやブラウザのタブに表示されるタイトルなどを設定する場所です。
  title: "BBS Next.js",
  description: "bbs-nextjsは、Next.jsを使用して構築されたシンプルな掲示板アプリケーションです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* どのページにも表示させたいならここに追加 */}
        <Header />
        {children}
      </body>
    </html>
  );
}
