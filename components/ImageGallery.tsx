"use client";  // Marks this component as a client component

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const ImageGallery: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Image 1 */}
        <div className="flex-none hidden sm:block">
          <Image
            src="/assets/images/WatPhoTempel.jpg" // Replace with the actual path to your image
            alt="Image 1"
            width={300} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-none hidden sm:block">
          <Image
            src="/assets/images/thai-öl-massage.png" // Replace with the actual path to your image
            alt="Image 2"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="flex-none hidden sm:block">
          <Image
            src="/assets/images/watpho3.jpg" // Replace with the actual path to your image
            alt="Image 3"
            width={500} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
