import React from 'react';
import useCase from '../assets/usecase.svg';

const UseCase = () => {
  return (
    <>
      <div className="bg-white pt-60 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4 mr-32">
            <img src={useCase} alt="Support" className="absolute inset-0 " />

          </div>
          <div className="w-full md:w-1/2 text-center md:text-left p-8 mt-32 ">
            <p className="text-greenPrimary text-[15px] roboto-light mb-12">
              CASO DE ÉXITO
            </p>
            <h2 className="text-2xl  lg:text-[40px] text-myBlack  mb-4 corbel-bold leading-tight">
              Conoce cómo ayudamos a 3 corporaciones a automatizar +90% de sus procesos de cobranzas
            </h2>

            <a href="">Descargalo aquí</a>
          </div>
        </div>
      </div>

      <div className="bg-white py-28 px-4 mt-60 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl  lg:text-[40px] text-myBlack  mb-4 corbel-bold leading-tight">
            ¿Eres una institución financiera? Conoce cómo <br className="hidden lg:block" /> ofrecerle alguna de nuestras soluciones a tus clientes
          </h2>
        </div>
        <div>
          <button className="w-full  items-center justify-center mt-8 px-6 py-4  text-base leading-6 roboto-light rounded-full   border border-white hover:border-black bg-greenPrimary hover:bg-white text-white  hover:text-black focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
            Agenda una reunion
          </button>
        </div>
      </div>
    </>
  );
};

export default UseCase;
