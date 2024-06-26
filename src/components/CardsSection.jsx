import Card from '../components/Card';
import Data from '../assets/data.svg';
import Skeme from '../assets/ivoinetsk.svg';

const CardsSection = () => {
    const cardsData = [
        {
            image: Skeme,
            icon: Data,
            text: 'Captura automáticamente la información de distintas fuentes del cliente deudor'
        },
        {
            image: Skeme,
            icon: Data,
            text: 'Actualiza las fechas de pago en el ERP continuamente'
        },
        {
            image: Skeme,
            icon: Data,
            text: 'Las conciliaciones se registran automáticamente en el ERP vía archivos'
        },
        // ... más datos de tarjetas
    ];

    return (

        <div className="flex flex-wrap justify-center">

            <div className='mb-24'>
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
            {cardsData.map((cardData, index) => (
                <Card key={index} {...cardData} />
            ))}
        </div>
    );
};

export default CardsSection;
