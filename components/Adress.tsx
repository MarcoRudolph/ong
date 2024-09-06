import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface Props {
  // Define your props here
}

const Adress: React.FC<Props> = ({}) => {
  return (
    <div id="contact" className="mt-10">
      <h2 className="text-4xl text-center font-semibold mb-8">Kontakt</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-0">
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
          <a href="mailto:or.ongthaimassage@gmail.com" className="text-black hover:underline">
            or.ongthaimassage@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center font-semibold mb-5">
        <p>Gerne reservieren wir Ihren Termin zu individuellen Zeiten.</p>
      </div>
       {/* Google Maps Einbettung */}
       <section>
          <h2 className="text-2xl font-sans mb-5 mt-5 text-center">Unser Standort</h2>
          <div className="flex justify-center mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.7866102090095!2d9.790416016156765!3d53.655762380047885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1933c178a599d%3A0x4098f8c69716c30!2sBahnhofstra%C3%9Fe%2041%2C%2025445%20Pinneberg%2C%20Deutschland!5e0!3m2!1sde!2sde!4v1694104930534!5m2!1sde!2sde"
              width="600"
              height="450"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps - Pinneberg"
            ></iframe>
          </div>
        </section>
    </div>
  );
};

export default Adress;
