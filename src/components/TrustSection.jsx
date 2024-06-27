import React from 'react';
import backgroundImage from '../assets/background-lines.svg'; 
import adamLogo from '../assets/treasurytoday.svg'; 

const TrustSection = () => {
    return (
        <>
            <div className="relative bg-white pt-80 px-4 md:px-8 lg:px-16 overflow-hidden">
                <img src={backgroundImage} alt="Background Lines" className="absolute inset-0 w-full h-full object-cover " />
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 p-16 ">
                        <h2 className="text-4xl text-black corbel-bold  leading-tight mt-20">
                            Empresas de distintos países en Latinoamérica confían en Invoinet
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 space-y-20">
                        <div className="border-l-4 border-greenPrimary pl-4">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-greenPrimary roboto-bold">9.8M<span className="text-lg md:text-xl roboto-bold text-secondary">USD</span></h3>
                            <p className="text-gray-700 roboto-light">Transacciones contables y de cobranzas dentro de la plataforma</p>
                        </div>
                        <div className="border-l-4 border-greenPrimary pl-4">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-greenPrimary roboto-bold">2,900</h3>
                            <p className="text-gray-700 roboto-light">Empresas que usan la plataforma cada mes para hacer pagos a proveedores</p>
                        </div>
                        <div className="border-l-4 border-greenPrimary pl-4 mt-16">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-greenPrimary roboto-bold">5</h3>
                            <p className="text-gray-700 roboto-light">Alianzas con bancos corporativos regionales para entregar más valor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-28 px-4 mt-24 flex flex-col items-center justify-center">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <p className="text-black text-lg roboto-regular text-[14px] md:text-[24px]">
                        Invoinet formó parte de
                    </p>
                </div>
                <div>
                    <img src={adamLogo} alt="adamlogo" />
                </div>
            </div></>
    );
};

export default TrustSection;
