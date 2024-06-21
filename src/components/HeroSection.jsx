import React from 'react';
import heroImage from '../assets/heroimg.svg'; // Adjust the path to your image

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl corbel-bold  text-gray-900 leading-tight mb-7">
            Conciliaciones automatizadas,
            <br />
            <span className="text-teal-600">gestión ágil de transacciones </span>

            para las <br />áreas de cobranzas y tesorería
          </h1>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl roboto-regular ">
            Hacemos que los equipos de cobranzas de empresas de bienes de
            <br />
            consumo tengan una mano derecha para mejorar su trabajo diario
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <img src={heroImage} alt="Hero" className="  h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;