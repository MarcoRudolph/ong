import React, { FC } from 'react'
import { Card } from 'shadcn-ui';


interface MassagePricingProps {
  
}

const MassagePricing: FC<MassagePricingProps> = ({  }) => {
    return (
        <Card className="flex flex-col md:flex-row items-stretch gap-8 p-6 rounded-lg shadow-lg">
          {/* Linke Spalte für das Bild */}
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
    
          {/* Rechte Spalte unterteilt in zwei Zeilen */}
          <div className="flex flex-col justify-between md:w-1/2">
            {/* Obere Zeile für die Überschrift */}
            <h1 className="text-5xl font-bold text-center md:text-left mb-4 md:mb-8">
              Überschrift
            </h1>
    
            {/* Untere Zeile für den Text */}
            <div className="text-lg space-y-2 text-center md:text-left leading-relaxed">
              <p>40 Minuten | 50€</p>
              <p>60 Minuten | 70€</p>
              <p>90 Minuten | 100€</p>
              <p>120 Minuten | 130€</p>
              <p>(mit warmem Öl 10€)</p>
            </div>
          </div>
        </Card>
      );
}

export default MassagePricing;