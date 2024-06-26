import React from 'react';
import supportImage from '../assets/office.svg'; 

const SupportSection = () => {
  return (
    <div className="bg-white py-60 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
          <img src={supportImage} alt="Support" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left p-8">
          <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight">
            Soporte continuo y de confianza para que tu equipo de cobranzas se enfoquen en sus objetivos
          </h2>
          <p className="text-black text-[20px] roboto-light">
            El equipo de Invoinet monitorea y configura la plataforma para continuar el flujo de información de cobranzas y pagos automáticamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
