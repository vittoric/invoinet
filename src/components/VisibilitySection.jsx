import React from 'react';
import invoinetFlgs from '../assets/invoinetflgs.svg';

const VisibilitySection = () => {
  return (
    <div className="bg-gradient-to-r from-bluePrimary  to-greenPrimary py-60 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 corbel-bold ">
            Visibilidad para todos los equipos involucrados en los procesos de cobranzas y conciliación
          </h2>
          <p className="text-white text-lg roboto-light">
            La plataforma de Invoinet da acceso personalizado a distintas áreas de negocio sobre el status de cobranzas, para que estén informados que la comunicación sea fluida y continua.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <img src={invoinetFlgs} alt="Invoinet Logo" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilitySection;
