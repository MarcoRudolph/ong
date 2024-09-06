import React from 'react';
import { AlertCircle } from 'lucide-react'; // Importing the AlertCircle icon from Lucide

const KlartextMessage: React.FC = () => {
  return (
    <div className="flex items-center justify-center border border-red-600 rounded-lg p-4 my-6 max-w-md mx-auto bg-red-50">
      <AlertCircle className="text-red-600 w-10 h-10 mr-3" />
      <p className="text-red-700 font-semibold text-center">
        Klartext: Wir bieten keine Erotikmassagen an. Ohne Ausnahme.
      </p>
    </div>
  );
};

export default KlartextMessage;
