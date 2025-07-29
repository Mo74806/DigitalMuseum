import type { Metadata } from "next";
import { Playfair_Display, Patua_One } from "next/font/google";
import "./globals.css";

const playFair = Playfair_Display({
  variable: "--font-play-fair",
});
const patua_one = Patua_One({
  variable: "--font-patua",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Digital Museum",
  description: "Frontend Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${patua_one.variable}  ${playFair.variable}    antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
