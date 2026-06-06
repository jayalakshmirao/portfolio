import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Spicy_Rice } from "next/font/google";

const spicyRice = Spicy_Rice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-spicy",
});
 
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
 
export const metadata: Metadata = {
  title: "Jayalakshmi",
  description: "Payments Engineer × Writer",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}

<html
  lang="en"
  className={`${cormorant.variable} ${spicyRice.variable}`}
></html>