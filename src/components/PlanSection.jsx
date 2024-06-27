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
    <div className=" bg-gradient-to-r from-bluePrimary  to-greenPrimary py-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl leading-9 corbel-bold text-white sm:text-4xl sm:leading-10">
          Elige un plan base que se ajuste al contexto de tu empresa
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 sm:grid-cols-1 h-[430px] ">
          {plans.map((plan, index) => (
            <div key={index} className="relative bg-white border border-gray-200 p-20 rounded-lg shadow-sm">
              <h3 className="text-[40px] leading-10 corbel-bold text-black">{plan.title}</h3>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-black">→</span>
                    <p className="text-black roboto-light">{feature}</p>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-1/2 inline-flex items-left justify-center px-4 py-2 border  border-black text-base leading-6 roboto-light rounded-full text-black bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                Conversa con un experto
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
