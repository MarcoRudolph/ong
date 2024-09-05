"use client";  // This line must be at the very top of the file

import React, { useState } from 'react';
import Image from "next/image";
import HeaderImage from "../components/HeaderImage";
import Navbar from "../components/NavBar";
import MassagePricingList from "@/components/MassagePricingList";
import About from "../components/About";
import ImageGallery from "../components/ImageGallery";
import Welcome from "../components/Welcome";
import Impressum from "../components/Impressum";

export default function Home() {
  const [isImpressumVisible, setImpressumVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-start w-full flex-grow">
        <Navbar />
        <Welcome className="mt-10" />
        <div id="about" className="flex flex-col justify-center items-center">
          <About />
          <ImageGallery />
        </div>
        {/* Add other components below as needed */}
      </main>

      {/* Footer Buttons */}
      <footer className="w-full py-4 bg-gray-100 flex justify-center space-x-4 fixed bottom-0">
        <button className="text-blue-600 hover:underline">AGB</button>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => setImpressumVisible(true)}
        >
          Impressum
        </button>
        <button className="text-blue-600 hover:underline">Datenschutz</button>
        <button className="text-blue-600 hover:underline">Cookie-Richtlinie</button>
      </footer>

      {/* Impressum Modal */}
      <Impressum isVisible={isImpressumVisible} onClose={() => setImpressumVisible(false)} />
    </div>
  );
}
