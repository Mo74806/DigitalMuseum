import type { Metadata } from "next";
import { Playfair_Display, Patua_One } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playFair = Playfair_Display({
  variable: "--font-play-fair",
  subsets: ["latin"],
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
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
