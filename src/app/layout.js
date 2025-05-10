import { Geist, Geist_Mono } from "next/font/google";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gamja-flower", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "For You :D",
  description: "app for ----",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gamjaFlower.class}>
      <head>
        <link rel="icon" href="/assets/images/pinkheart.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
