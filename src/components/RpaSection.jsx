import React from 'react';
import rpaImage from '../assets/rpa.svg'; 

const RpaSection = () => {
  return (
    <div className="bg-white py-60 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
          <img src={rpaImage} alt="Support" className="rounded-lg" />
          
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left p-8">
          <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight">
          Automatiza la captura de pagos de distintos canales con RPA (Robotic Process Automation)
          </h2>
          <p className="text-black text-[20px] roboto-light">
          Usamos robots para capturar información de pagos y facturas de los diferentes 
          canales de tus clientes, y la actualizamos en tu ERP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RpaSection;
