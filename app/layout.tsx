import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Calibre } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christopher Lai",
  description: "Christopher Lai Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[url('/images/bg.svg')] bg-cover bg-no-repeat">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
