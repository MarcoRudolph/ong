"use client"; // Ensure this is the first line in the file

import Reactm, {useContext} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UiContext } from '../lib/context/UiContext';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(UiContext);

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

  // This function toggles the 'open' class on the menu for mobile devices
  const toggleMenu = () => {
    const nav = document.getElementById('mobile-menu');
    if (nav) {
      nav.classList.toggle('hidden');
      dispatch({ type: "TOGGLEMENU" })
    }

    const wel = document.getElementById('welcome');
    if (wel) {
      wel.classList.toggle('hidden');
    }
  };

  return (
    <nav className="w-full bg-gray-100 py-4 ">
      <div className="flex b px-4 md:justify-between md:items-between lg:items-center  lg:justify-center">
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
          </svg>
        </button>
        <p id="welcome" className="lg:hidden flex justify-center w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-semibold text-2xl mr-6 text-darkred">Willkommen</p>
        <div></div>
        <ul className="hidden md:flex items-center justify-center md:gap-8">
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
          {/* <li className="text-lg">
            <Link href="/#shop" onClick={(e) => handleNavigation(e, '#shop')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
              GUTSCHEIN
            </Link>
          </li> */}
          <li className="text-lg">
            <Link href="/#contact" onClick={(e) => handleNavigation(e, '#contact')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
              KONTAKT
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden">
        <ul className="flex flex-col items-center gap-4 mt-4">
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
            <Link href="#preisliste" onClick={(e) => handleNavigation(e, '#preisliste')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
              PREISLISTE
            </Link>
          </li>
          <li className="text-lg">
            <Link href="/#contact" onClick={(e) => handleNavigation(e, '#contact')} className="text-gray-800 hover:underline hover:text-black transition-colors duration-300">
              KONTAKT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
