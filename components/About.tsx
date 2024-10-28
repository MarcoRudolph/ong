"use client"; // Marks this component as a client component

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);


  const readMore = () => {
    try {
      setShowMore(true);
      const element = document.querySelector("#about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } 
    } catch (e) {
      console.log(e);
    }
  };

  const readLess = () => {
    try {
      setShowMore(false);
      const element = document.querySelector("#about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } 

      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center w-full md:p-0 xl:w-1/2">
      <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 xl:w-1/2 text-left mb-6 md:mb-0 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-darkred">
            Über Orathai
          </h2>
          <p className="text-lg leading-relaxed">
            Orathai begann im Alter von 4 Jahren von ihrem Vater, einem
            erfahrenen Masseur, die Lehren über Körper und Massage zu erlernen.
            Mit der Lernfähigkeit eines Kindes hat sie bereits früh erfahren, wo
            im Körper die Muskeln und Sehnen verlaufen. Das Spüren von
            Verklebungen und Blockaden hat sie bereits vor ihrer Ausbildung
            beherrscht.
            <br />
            <br />
            Später vertiefte sie ihr Wissen an der renommierten Wat Pho
            Massageschule in Bangkok, bekannt für ihre strengen Standards und
            die Vermittlung tiefgreifender Techniken der traditionellen
            medizinischen Thai-Massage.
          </p>

          {/* "Mehr lesen" Link */}
          {!showMore && (
            <p>
              <button
                className="border-none text-darkred text-lg bg-none underline"
                onClick={(e) => {
                  console.log("clicked");
                  e.preventDefault();

                  console.log("prevented succsesful")
                  readMore();
                }}
              >
                Mehr lesen
              </button>
            </p>
          )}

          {/* Hidden Text */}
          {showMore && (
            <>
              <p className="text-lg leading-relaxed">
                <br />
                Durch ihre langjährige Erfahrung und ihren feinen Tastsinn
                erkennt Orathai Verspannungen und Schmerzpunkte schnell und
                behandelt sie gezielt. Mit ruhiger und präziser Technik
                lokalisiert sie die Ursachen von Schmerzen und löst sie
                effektiv, was zu tiefer Entspannung und gesteigertem
                Wohlbefinden führt.
                <br />
                <br />
                Ihre Fähigkeit, sich auf die individuellen Bedürfnisse jedes
                Kunden einzustellen, macht jede Massage zu einem einzigartigen
                und heilenden Erlebnis. Mit ihrer fundierten Ausbildung und
                Hingabe sorgt Orathai dafür, dass ihre Kunden nicht nur
                entspannen, sondern auch langanhaltende Linderung erfahren.
              </p>

              {/* "Weniger lesen" Link */}
              <p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    readLess();
                  }}
                  className="border-none text-darkred text-lg bg-none underline"
                >
                  Weniger lesen
                </button>
              </p>
            </>
          )}
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full xl:w-1/2 px-4">
          <div className="relative w-full h-[650px]">
            <Image
              src="/assets/images/orathai.jpg" // Pfad zum Bild
              alt="Orathai"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
