"use client"; // Marks this component as a client component

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation for navigation
import { MapPin, Phone, Mail } from "lucide-react"; // Import icons from Lucide
import KlartextMessage from "./Disclaimer";
import { UiContext } from "../lib/context/UiContext";

const Welcome: React.FC = () => {
  const router = useRouter(); // Initialize router

  const { state, dispatch } = useContext(UiContext);

  // Detect screen size and update context
  useEffect(() => {
    const handleResize = () => {
      const isSmartphone = window.matchMedia("(max-width: 768px)").matches; // Media query for smartphones
      dispatch({ type: "SET_SCREEN_SIZE", payload: isSmartphone });
    };

    // Check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const handleButtonClick = () => {
    router.push("/mitarbeitergesucht"); // Navigate to the route
  };

  return (
    <section className="flex flex-col items-center justify-center w-full pt-8 text-center overflow-x-hidden">
      {/* Welcome Heading */}
      {!state.menuIsOpen && state.isSmartphone && (
        <h1 id="welcomeBig" className="text-2xl text-darkred font-semibold mb-8">
          Willkommen
        </h1>
      )}

      {/* Two Column Section */}
      <div className="flex flex-col md:flex-row w-full lg:w-1/2 gap-4 md:gap-6 lg:gap-8 mb-8 overflow-x-hidden">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-left px-4">
          <div className="w-full max-w-full">
            <h2 className="text-darkred text-xl lg:text-2xl font-semibold mb-4">
              Über das Studio
            </h2>
            <p className="text-md leading-relaxed w-full">
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
          <div className="flex flex-col items-center mt-5 w-full">
            <KlartextMessage />
            <button
              onClick={handleButtonClick}
              className="text-white px-6 py-2 w-[200px] rounded mt-4 hover:bg-[#f0dfe7] hover:text-[#a6286f] transition bg-[#a6286f] mx-auto"
            >
              Mitarbeiter gesucht
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div id="preisliste" className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0 px-4">
          <img
            src="/assets/images/Flyer_10.5x21 cm-02.jpg" // Replace with your actual image path
            alt="Studio"
            className="rounded-lg object-contain w-full max-w-md h-auto sm:max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
