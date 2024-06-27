import React from 'react';
import edit from '../assets/edit-2.svg'; 
import gear from '../assets/gear.svg';
import clipboard from '../assets/clipboard.svg';
import satellite from '../assets/satellite.svg';
import wrench from '../assets/wrench.svg';
import arrow from '../assets/arrow-right.svg';
import lines from '../assets/lines.svg';

const ProcessSection = () => {
  const cards = [
    { title: 'Planificación', description: 'Reunión kick off con equipo interno para alineamientos.', icon: edit, step: '01', simbol: arrow },
    { title: 'Ejecución', description: 'Desarrollo y configuración tecnológica.', description2: 'Presentamos a nuestro equipo de operaciones.', icon: gear, step: '02', simbol: arrow, simbol2: arrow },
    { title: 'Pruebas', description: 'Acompañamiento para validar la experiencia de usuario y procesos.', icon: clipboard, step: '03', simbol: arrow },
    { title: 'Go live', description: 'Pase a producción y cierre de implementación.', icon: satellite, step: '04', simbol: arrow },
    { title: 'Producción', description: 'Inicio de servicio recurrente y uso de plataforma.', description2: 'Soporte y monitoreo continuo de equipo Invoinet.', icon: wrench, step: '05', simbol: arrow, simbol2: arrow }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-9 corbel-bold text-black sm:text-4xl sm:leading-10">
          Personalizamos nuestras soluciones según las necesidades de tus áreas de cobranzas y tesorería
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-xl text-black leading-7 roboto-light">
          Este es el proceso para comenzar a trabajar juntos:
        </p>
        <div className="mt-10 grid gap-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {cards.map((card, index) => (
            <div key={index} className="relative bg-white border border-greenPrimary p-6 rounded-lg shadow-sm w-[350px] md:w-[250px]  m-4 mx-auto">
              <div className="text-left">
                <div className="mb-4">
                  <img src={card.icon} alt="" className="mt-16 h-7 w-7" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-black corbel-bold">{card.title}</h3>
                <p className="mt-2 text-base leading-6 text-black roboto-light">
                  {card.simbol && <img src={card.simbol} alt="" className="h-3 w-3 inline" />} {card.description}
                </p>
                {card.description2 && (
                  <p className="mt-2 text-base leading-6 text-black roboto-light">
                    {card.simbol2 && <img src={card.simbol2} alt="" className="h-3 w-3 inline" />} {card.description2}
                  </p>
                )}
              </div>
              <div className="absolute top-0 right-0 mr-3 mt-2">
                <h2 className='text-greenPrimary text-[40px] roboto-light'>{card.step}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 hidden xl:block">
        <img src={lines} alt="lines" className="ml-20 mb-3 -mt-10" />
          <p className="text-[24px] leading-6 text-black roboto-light ml-36">
            <span className="text-greenPrimary">Fase de implementación:</span> Todo este proceso puede tomar 2 a 3 meses
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
