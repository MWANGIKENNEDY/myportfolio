import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MyProvider from "@/components/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kennedy Mwangi | Full-Stack Developer",
  description: "Portfolio of Kennedy Mwangi, a full-stack developer passionate about building beautiful and functional web applications.",
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
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
