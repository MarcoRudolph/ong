import React from "react";
import Image from "next/image";
import HeaderImage from "../components/HeaderImage";
import Navbar from "../components/NavBar";
import About from "../components/About";
import ImageGallery from "../components/ImageGallery";
import Welcome from "../components/Welcome";
import Impressum from "../components/Impressum";
import FooterButtons from "../components/FooterButtons"; // Import the TSX FooterButtons component
import Adress from "../components/Adress";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-start w-full">
     
        <Welcome />
        <div id="about" className="flex flex-col justify-center items-center">
          <About />
          <ImageGallery />
        </div>
        {/* Add other components below as needed */}
        <div id="contact" className="flex flex-col justify-center items-center">
        <Adress />
        </div>
      </main>

      {/* Use the FooterButtons component */}
      <FooterButtons />
    </div>
  );
};

export default Home;
