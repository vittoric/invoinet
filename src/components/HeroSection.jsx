import React from 'react';
import heroImage from '../assets/heroimg.svg';

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center  ">
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl sm:text-[40px]  md:text-[45px] lg:text-[55px] xl:text-[60px] corbel-bold  text-black leading-tight mb-7">
            Conciliaciones automatizadas,
            <br />
            <span className="TealDark">gestión ágil de transacciones </span>

            para las <br />áreas de cobranzas y tesorería
          </h1>
          <p className="text-black text-[14px]  md:text-[20px] roboto-regular ">
            Hacemos que los equipos de cobranzas de empresas de bienes de
          </p>
          <p className="text-black text-[14px]  md:text-[20px] roboto-regular ">
            consumo tengan una mano derecha para mejorar su trabajo diario
          </p>

        </div>
        <div className="w-full flex justify-center mt-10 radial-gradient-teal">
          <img src={heroImage} alt="Hero" className="  h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
