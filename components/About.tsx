"use client"; // Marks this component as a client component

import React from "react";
import Image from "next/image"; // Import Next.js Image component

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full p-8">
      <div className="flex flex-col md:flex-row lg:w-1/2 md:w-full gap-8 mb-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-darkred">Über Orathai</h2>
          <p className="text-lg leading-relaxed">
            Orathai ist eine hochqualifizierte Masseurin, die eine hervorragende
            Ausbildung an der renommierten Wat Pho Massageschule in Bangkok
            genossen hat, dem bekanntesten Ausbildungsort für traditionelle
            medizinische Thai-Massagen. Diese Schule ist bekannt für ihre
            strengen Standards und die Vermittlung tiefgreifender Techniken, die
            sie in ihrer Arbeit anwendet. Orathai kann durch ihre langjährige
            Erfahrung und ihren feinen Tastsinn Verspannungen und Schmerzpunkte
            schnell erkennen und gezielt behandeln. Sie versteht es, mit ihrer
            ruhigen und präzisen Technik die Ursachen von Schmerzen zu
            lokalisieren und effektiv zu lösen, was zu einer tiefen Entspannung
            und einem gesteigerten Wohlbefinden führt. Ihre Fähigkeit, sich auf
            die individuellen Bedürfnisse jedes Kunden einzustellen, macht jede
            Massage zu einem einzigartigen und heilenden Erlebnis. Durch ihre
            fundierte Ausbildung und ihre leidenschaftliche Hingabe sorgt
            Orathai dafür, dass ihre Kunden nicht nur entspannen, sondern auch
            langanhaltende Linderung erfahren.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-1/2">
          <Image
            src="/assets/images/orathai.jpg" // Replace with the actual path to your image
            alt="Orathai"
            width={450} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
