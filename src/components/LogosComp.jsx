import React from 'react';
import nestleLogo from '../assets/nestle.png'; // Adjust the paths to your logo images
import exxonLogo from '../assets/exonmobil.png';
import revlonLogo from '../assets/revlon.png';
import Marquee from "react-fast-marquee";

const logos = [nestleLogo, exxonLogo, revlonLogo, nestleLogo, exxonLogo, revlonLogo]; // Add logos as needed

const LogosComp = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-black text-lg roboto-regular subheading">
          +40 empresas de bienes de consumo de Latinoamérica confían en InvoiNet:
        </p>
      </div>
      <Marquee pauseOnHover gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Company logo"
            className="inline-block mx-8 h-16"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LogosComp;
