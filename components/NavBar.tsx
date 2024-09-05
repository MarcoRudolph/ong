import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-100 py-4">
      <ul className="flex justify-center gap-8">
        <li className="text-lg">
          <a href="#home" className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">HOME</a>
        </li>
        <li className="text-lg">
          <a href="#about" className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">ÜBER ORATHAI</a>
        </li>
        <li className="text-lg">
          <a href="#shop" className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">GUTSCHEIN-SHOP</a>
        </li>
        <li className="text-lg">
          <a href="#contact" className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
