"use client";

import "../styles/globals.css";
import { Open_Sans as FontSans } from "next/font/google";
import Image from "next/image";
import { cn } from "../lib/utils";
import { ReactNode } from "react";
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons from Lucide
import Navbar from "../components/NavBar";
import Adress from "../components/Adress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UiProvider } from "../lib/context/UiContext";
import Contact from "../components/Contact";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include normal (400), semi-bold (600), and bold (700) weights
  style: ["normal", "italic"], // Include normal and italic styles
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex flex-col min-h-screen w-full p-2 md:w-full bg-white font-sans antialiased items-center p-0, m-0, overflow-hidden, overflow-x-hidden box-border",
          fontSans.variable
        )}
      >
        <UiProvider>
          <div className="w-full h-48 lg:h-[500px] relative bg-[#f0dfe7] rounded-xl border-b-8 border-[#a6286f]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-0 mx-4"></div>
            <Contact />
            {/* Image Section */}
            <Image
              src="/assets/images/1_Ong Thai-Massage_png.png"
              alt="Header image"
              layout="fill"
              objectFit="contain"
              quality={100}
              className="absolute inset-0 rounded-xl"
              onLoad={(e) =>
                console.log((e.target as HTMLImageElement).naturalWidth)
              }
            />

            {/* Address Section */}
            <div className="absolute top-0 left-0 w-full z-10">
              {/* <Adress /> */}
            </div>
          </div>
          <Navbar />
          {children}
          <SpeedInsights />
        </UiProvider>
      </body>
    </html>
  );
}
