import React, { useState } from 'react';
import Card from './Card';
import Data from '../assets/data.svg';
import Skeme from '../assets/ivoinetsk.svg';
import Erp from '../assets/erp.svg';
import Arch from '../assets/arch.svg';
import Debit from '../assets/debit.svg';
import Report from '../assets/report.svg';
import File from '../assets/document-copy.svg';
import Recipi from '../assets/receipt-edit.svg';
import Clip from '../assets/clipboard-tick.svg';
import Chart from '../assets/chart.svg';
import Portal from '../assets/documentos_fiscales.svg';
import Pagos from '../assets/Portal_pagos_2 1.svg';
import Declar from '../assets/capacidad_declarar_pagos.svg';
import Comprobante from '../assets/carga_comprobantes.svg';
import Cobros from '../assets/control_cobros.svg';

const CardsSection = () => {
    const [isCards, setIsCards] = useState(false);
    const cardsData = [

        {
            image: Erp,
            icon: File,
            text: 'Actualiza las fechas de pago en el ERP continuamente'
        },
        {
            image: Arch,
            icon: Recipi,
            text: 'Las conciliaciones se registran automáticamente en el ERP vía archivos'
        },
        {
            image: Debit,
            icon: Clip,
            text: 'Identifica débitos como descuentos, devoluciones e impuestos'
        },
        {
            image: Report,
            icon: Chart,
            text: 'Genera reportes de los documentos de pagos clasificados'
        },



    ];

    const cardsData2 = [

        {
            image: Portal,
            icon: File,
            text: 'Publica documentos fiscales (Ej. Facturas) automáticamente y saldos pendientes de pagos'
        },
        {
            image: Declar,
            icon: Recipi,
            text: 'Capacidad de declarar pagos y conciliar cobros físicos o digitales'
        },
        {
            image: Comprobante,
            icon: Clip,
            text: 'Carga de comprobantes de retención impositiva'
        },
        {
            image: Pagos,
            icon: Chart,
            text: 'Gestión de disputas comerciales a través de la plataforma para realizar cobranzas preventivas'
        },
        {
            image: Cobros,
            icon: Chart,
            text: 'Control de cobros dentro de las reglas de negocio de tu empresa'
        },


    ];

    return (

        <>

            <div className='mb-24 text-center'>
                <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight text-center">
                    Nuestras soluciones pueden
                    <span className="text-greenPrimary leading-tight"> automatizar +90%
                    </span>
                </h2>
                <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight text-center">
                    <span className="text-greenPrimary leading-tight">
                        de los procesos de cobranzas
                    </span> y tesorería
                </h2>
                <p className="text-black text-[20px] roboto-light">
                    Disminuye la carga excesiva de trabajo operativo en tus áreas con nuestra soluciones:
                </p>
            </div>

            <div className="flex justify-center  mb-4 ">
                {/*<button className='rounded-lg border border-greenPrimary m-2 flex space-x-4 '>*/}
                <div className='rounded-lg border border-greenPrimary flex space-x-4'>
                    <button
                        className={`px-10 py-2 mr-2 rounded-lg  ${!isCards ? 'bg-black text-white' : 'bg-none text-black'}`}
                        onClick={() => setIsCards(false)}
                    >
                        Conciliación Masiva
                    </button>
                    <button
                        className={`px-4 py-2 mr-2 rounded-lg ${isCards ? 'bg-black text-white' : 'bg-none text-black'}`}
                        onClick={() => setIsCards(true)}
                    >
                        Portal de pagos y cobranzas
                    </button></div>
                {/*}   </button>*/}
            </div>





            {isCards ? (
                <>
                    <div className='m-6 text-center block'>
                        <p className="text-black text-[20px] roboto-light block">
                            Toma control de los pagos y cobros de tus clientes e integra los diversos
                            medios de pago en una plataforma.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center mx-20">
                        {cardsData2.map((cardData, index) => (
                            <Card key={index} {...cardData} />
                        ))}
                    </div>
                </>

            ) : (
                <>

                    <div className='m-6 text-center'>
                        <p className="text-black text-[20px] roboto-light">
                            Si tu empresa recibe avisos de pagos y concentra grandes volúmenes de <br />
                            facturas con pocos deudores, conoce cómo esta solución puede ayudarte en
                            tus procesos de cobranzas:
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center mx-20">
                        {/*Card personalizado por la esquema de Invoinet*/}


                        <div className="max-w-[500px] rounded overflow-hidden shadow-lg m-6 p-3">
                            <div className=' rounded   bg-radial hover:overflow-hidden'>
                                <img className="w-full
                                                transition duration-500 ease-in-out transform 
                                                hover:-translate-y-1 hover:scale-105 " src={Skeme} alt="Card" />
                            </div>
                            <div className="px-6 py-4">
                                <img src={Data} alt="icon" className='w-[30px] mt-4' />
                                <p className="text-myBlack text-lg corbel-bold mt-4">
                                    Captura automáticamente la información de distintas fuentes del cliente deudor
                                </p>
                            </div>
                        </div>
                        {cardsData.map((cardData, index) => (
                            <Card key={index} {...cardData} />
                        ))}
                    </div>
                </>
            )}


        </>
    );
};

export default CardsSection;
