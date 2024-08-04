import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "War gym",
  description: "War Gym One Page",

};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/app/w.png" />
      <body className={`${inter.className} bg-black text-gray-300`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
