import React from 'react';
import heroImage from '../assets/heroimg.svg'; // Adjust the path to your image

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full  text-center md:text-left mb-8 md:mb-0 ">
          <h1 className="text-60px  text-gray-900 text-center corbel-bold leading-tight mb-7">
            Conciliaciones automatizadas,
            <br />
            <span className="TealDark">gestión ágil de transacciones </span>

            para las <br />
            áreas de cobranzas y tesorería
          </h1>
          <p className="text-gray-700 text-center roboto-regular text-20px">
            Hacemos que los equipos de cobranzas de empresas de bienes de
            <br />
            consumo tengan una mano derecha para mejorar su trabajo diario
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center  mt-20  ">
        <img src={heroImage} alt="Hero" className="heroImg" />
      </div>

    </div>
  );
};

export default HeroSection;
