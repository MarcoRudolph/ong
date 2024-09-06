"use client"; // Marks this component as a client component

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation for navigation
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons from Lucide
import KlartextMessage from "./Disclaimer";

const Welcome: React.FC = () => {
  const router = useRouter(); // Initialize router

  const handleButtonClick = () => {
    router.push("/mitarbeitergesucht"); // Navigate to the route
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-8 text-center">
      {/* Welcome Heading */}
      <h1 className="text-4xl font-semibold mb-8">Willkommen</h1>

      {/* Two Column Section */}
      <div className="flex flex-col md:flex-row lg:w-1/2 sm:w-full gap-8 mb-8">
        {/* Left Column */}
        <div className="md:w-1/2 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Über mein Studio</h2>
            <p className="text-md leading-relaxed">
              Entfliehen Sie dem Alltag und lassen Sie sich in meinem
              gemütlichen Studio nahe dem Bahnhof von Pinneberg verwöhnen. Die
              entspannende Atmosphäre lädt Sie ein, in eine Welt der Ruhe und
              Gelassenheit einzutauchen, in der Sie einfach abschalten und neue
              Energie tanken können. Sollten Sie unter Schmerzen leiden, stehe
              ich Ihnen mit meiner Expertise zur Seite, um gezielt Ihre
              Beschwerden zu lindern. Die Behandlungen sind dabei individuell
              auf Ihre Bedürfnisse abgestimmt und können intensiv sein, um eine
              effektive Schmerzlinderung zu gewährleisten. Vereinbaren Sie noch
              heute einen Termin und erleben Sie eine wohltuende Massage, die
              Körper und Geist belebt.
            </p>
          </div>
          {/* Centered Button */}
          <div className="flex justify-center items-center flex-col mt-5 w-full">
            <KlartextMessage />
            <button
              onClick={handleButtonClick}
              className="text-white px-6 py-2 w-[200px] rounded mt-4 hover:bg-[#f0dfe7] hover:text-[#a6286f] transition bg-[#a6286f]"
            >
              Mitarbeiter gesucht
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/images/Flyer_10.5x21 cm-02.jpg" // Replace with the actual path to your image
            alt="Studio"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
