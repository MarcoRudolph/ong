import React from 'react';
import { AlertCircle } from 'lucide-react'; // Importing the AlertCircle icon from Lucide

const KlartextMessage: React.FC = () => {
  return (
    <div className="flex items-center justify-center border border-darkred rounded-lg p-4 my-6 max-w-md mx-auto bg-red-50">
      <AlertCircle className="text-darkred w-10 h-10 mr-3" />
      <p className="text-darkred font-semibold text-center">
        Klartext: Wir bieten keine Erotikmassagen an. Ohne Ausnahme.
      </p>
    </div>
  );
};

export default KlartextMessage;
