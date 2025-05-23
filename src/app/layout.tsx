import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Isoala",
  description: "ismaeel alarcon's portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Abdurahman Alarcon is an Information Technology student at George Mason University." />
        <meta name="image" content="/profile.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Abdurahman Alarcon" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abdurahman Alarcon - Information Technology Portfolio" />
        <meta property="og:url" content="https://abdurahmanalarcon.com" />
        <meta property="og:image" content="https://abdurahmanalarcon.com/profile.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@isoalaaa" />
        <meta property="twitter:site" content="@isoalaaa" />
        <meta property="twitter:title" content="Abdurahman Alarcon - Information Technology Portfolio" />
        <link rel="canonical" href="https://abdurahmanalarcon.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abdurahman Alarcon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
