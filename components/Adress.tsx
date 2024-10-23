
import React from "react";
import Contact from "./Contact";
interface Props {
  // Define your props here
}

const Adress: React.FC<Props> = ({}) => {
  return (
    <div id="contact" className="mt-10">
    <h2 className="text-4xl text-center font-semibold mb-8 text-darkred">Kontakt</h2>
  
    <Contact/>
  
    <div className="hidden sm:flex items-center justify-center font-semibold mb-5 text-center mx-4">
      <p>Gerne reservieren wir Ihren Termin zu individuellen Zeiten.</p>
    </div>
  
    {/* Google Maps Embedding */}
    <section>
      <h2 className="text-2xl font-sans mb-5 mt-5 text-center text-darkred">Unser Standort</h2>
      <div className="flex justify-center mb-10 border-0 h-64 mx-4">
        <div className="border-0 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.7866102090095!2d9.790416016156765!3d53.655762380047885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1933c178a599d%3A0x4098f8c69716c30!2sBahnhofstra%C3%9Fe%2041%2C%2025445%20Pinneberg%2C%20Deutschland!5e0!3m2!1sde!2sde!4v1694104930534!5m2!1sde!2sde"
            className="border-0 w-full h-64"
            allowFullScreen={false}
            loading="lazy"
            title="Google Maps - Pinneberg"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Adress;
