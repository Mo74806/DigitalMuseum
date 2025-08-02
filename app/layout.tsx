// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Patua_One, Noto_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playFair = Playfair_Display({
  variable: "--font-play-fair",
  subsets: ["latin"],
});
const notoSans = Noto_Sans({ variable: "--noto-sans", subsets: ["latin"] });
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${patua_one.variable} ${notoSans.variable} ${playFair.variable} antialiased`}
      >
        <NavBar />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
