// components/FooterButtons.tsx
'use client'; // Mark this component as client-side

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const FooterButtons: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  // Click handler for navigation
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="w-full py-4 bg-gray-100 flex justify-center space-x-4">
      <button
        className="text-black text-sm hover:underline"
        onClick={() => handleNavigate('/agb')}
      >
        AGB
      </button>
      <button
        className="text-black text-sm hover:underline"
        onClick={() => handleNavigate('/impressum')}
      >
        Impressum
      </button>
      <button
        className="text-black text-sm hover:underline"
        onClick={() => handleNavigate('/datenschutz')}
      >
        Datenschutz
      </button>
      <button
        className="text-black text-sm hover:underline"
        onClick={() => handleNavigate('/cookie')}
      >
        Cookie-Richtlinie
      </button>
    </footer>
  );
};

export default FooterButtons;
