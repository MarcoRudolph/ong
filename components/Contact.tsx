import React, { FC } from 'react'
import { Mail, MapPin, Phone } from "lucide-react";
interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({  }) => {
  return (
    <div className="hidden lg:flex flex-row items-center lg:gap-6 justify-center">
       {/* Address */}
       <div className="flex items-center gap-2">
        <MapPin size={20} />
        <span>Pinneberg, Bahnhofstr. 41</span>
      </div>
  
      {/* Phone */}
      <div className="flex items-center gap-2">
        <Phone size={20} />
        <span>Tel.: 0151/56789424</span>
      </div>
  
      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail size={20} />
        <a href="mailto:or.ongthaimassage@gmail.com" className="text-black hover:underline">
          or.ongthaimassage@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact;