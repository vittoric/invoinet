import React, { useState } from 'react';
import sinInvoinet from '../assets/sininvoinet.svg';
import ConInvoinet from '../assets/Con_invoinet.svg';

const ComparisonSection = () => {
  const [isInvoinet, setIsInvoinet] = useState(false);

  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16 m-4 mt-24">
      <div className="max-w-[1520px] mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mx-12 mb-8 md:mb-0 ">
          <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight">
            Grandes volúmenes de transacciones de pagos, pocas personas en tu 
            equipo de cobranzas 
            <span className="text-greenPrimary leading-tight"> ¿Cómo ser más eficiente?</span>
          </h2>
          <p className="text-black text-[20px] roboto-light">
            Para cumplir con los objetivos de liquidez, los líderes deben 
            reducir la carga operativa de sus equipos, y tener soporte alineado 
            a sus procesos.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <div className="flex space-x-4 mb-4">
            <button className='bg-gradient-to-tr from-customTealDark  to-customTealLight p-3 rounded-full'>
            <button
              className={`px-4 py-2 mr-2 rounded-full ${!isInvoinet ? 'bg-white text-Black' : 'bg-none text-white'}`}
              onClick={() => setIsInvoinet(false)}
            >
              Sin Invoinet
            </button>
            <button
              className={`px-4 py-2 rounded-full ${isInvoinet ? 'bg-white text-black' : 'bg-none text-white'}`}
              onClick={() => setIsInvoinet(true)}
            >
              Con Invoinet
            </button>
            </button>
          </div>
          <div className="border border-greenPrimary p-3  rounded-lg w-full">
            {isInvoinet ? (
              <div className="flex justify-center">
                <img src={ConInvoinet} alt="" className='w-full'/>
                {/* Add your content for "Con Invoinet" here */}
              </div>
            ) : (
              <div className="flex justify-center">
                <img src={sinInvoinet} alt="" className='w-full'/>
                {/* Add your content for "Sin Invoinet" here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
