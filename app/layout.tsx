"use client";
import "@/styles/globals.css";
import { Open_Sans as FontSans } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { MapPin, Phone, Mail } from 'lucide-react'; // Import icons from Lucide

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
          "flex flex-col min-h-screen bg-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="w-full h-48 md:h-56 lg:h-[500px] relative bg-[#f0dfe7] rounded-xl border-b-8 border-[#a6286f] overflow-hidden">
            {/* Address Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
        {/* Address */}
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>Pinneberg, Bahnhofstr. 41</span>
        </div>
        
        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <span>Tel.: 04101/5874333</span>
        </div>
        
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <span>or@ong-thaimassage.de</span>
        </div>
      </div>
          <Image
            src="/assets/images/1_Ong Thai-Massage_png.png"
            alt="Header image"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="rounded-xl"
            onLoad={(e) =>
              console.log((e.target as HTMLImageElement).naturalWidth)
            }
          />
        </div>
        {children}
      </body>
    </html>
  );
}
