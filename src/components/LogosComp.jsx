import React from 'react';
import nestleLogo from '../assets/nestle.png'; // Adjust the paths to your logo images
import exxonLogo from '../assets/exonmobil.png';
import revlonLogo from '../assets/revlon.png';

const logos = [nestleLogo, exxonLogo, revlonLogo, nestleLogo, exxonLogo, revlonLogo]; // Add logos as needed

const LogosComp = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto text-center mb-4">
        <p className="text-gray-700 text-lg">
          +40 empresas de bienes de consumo de Latinoamérica confían en InvoiNet:
        </p>
      </div>
      <div className="overflow-hidden relative">
        <div className="marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company logo"
              className="inline-block mx-8 h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosComp;
