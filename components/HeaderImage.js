"use client";

import Image from "next/image";

const HeaderImage = ({ src, alt }) => {
  return (
    <div className="w-full h-64 relative border-b-4 border-b-gray-700"> 
      <Image src={src} alt={alt} fill={true} objectFit="contain" />
    </div>
  );
};

export default HeaderImage;
