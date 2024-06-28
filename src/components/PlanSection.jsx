import React from 'react';

const PlanSection = () => {
  const plans = [
    {
      title: 'Planes de implementación',
      features: [
        'Determinamos un nro. de horas para personalización',
        'Definimos la personalización de archivos y arquitectura de datos',
        'Realizamos relevamiento de reglas de negocio'
      ]
    },
    {
      title: 'Planes de producción',
      features: [
        'Capturamos correos electrónicos e información en Portales web hasta un nro. de clientes determinados',
        'Se definen archivos personalizados',
        'Procesamos de 5.000 a 20.000 Facturas por mes según necesidades',
        'Implementamos reglas de negocio'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-bluePrimary to-greenPrimary py-16 md:py-24 lg:py-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 corbel-bold text-white sm:text-4xl sm:leading-10 text-center">
          Elige un plan base que se ajuste <br className="hidden lg:block" /> al contexto de tu empresa
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
          {plans.map((plan, index) => (
            <div key={index} className="relative bg-white border border-gray-200 p-6 md:p-10 lg:p-20 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-3xl md:text-4xl lg:text-[40px] leading-6 md:leading-8 lg:leading-10 corbel-bold text-black">
                {plan.title}
              </h3>
              <ul className="mt-4 space-y-2 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-black">→</span>
                    <p className="text-base md:text-lg text-black roboto-light">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="w-full md:w-1/2 inline-flex items-center justify-center mt-8 px-4 py-2 border
                 border-black text-base leading-6 roboto-light rounded-full text-black bg-white 
                 hover:bg-gradient-to-r from-bluePrimary to-greenPrimary hover:text-white hover:border-white 
                 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  Conversa con un experto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
