// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Jayalakshmi",
//   description: "Payments Engineer × Writer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// ---claude
// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Jayalakshmi",
//   description: "Payments Engineer × Writer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
// --claude latest
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
 
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
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
    <html lang="en" className={cinzel.variable}>
      <body>{children}</body>
    </html>
  );
}
