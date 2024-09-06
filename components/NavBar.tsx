'use client'; // Ensure this is the first line in the file

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault(); // Prevent the default anchor link behavior

    if (window.location.pathname !== '/') {
      // Navigate to the root path
      router.push('/');
      // Delay setting the hash slightly to allow for the navigation
      setTimeout(() => {
        window.location.hash = hash;
        scrollToHash(hash);
      }, 100);
    } else {
      // Directly scroll to the element if already on the root page
      window.location.hash = hash;
      scrollToHash(hash);
    }
  };

  const scrollToHash = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-gray-100 py-4">
      <ul className="flex justify-center gap-8">
        <li className="text-lg">
          <Link href="/#home" onClick={(e) => handleNavigation(e, '#home')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
            HOME
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/#about" onClick={(e) => handleNavigation(e, '#about')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
            ÜBER ORATHAI
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/#shop" onClick={(e) => handleNavigation(e, '#shop')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
            GUTSCHEIN
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/#contact" onClick={(e) => handleNavigation(e, '#contact')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
            KONTAKT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
