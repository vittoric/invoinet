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

        <div className="flex flex-wrap justify-center ">
            <div className="w-[800px] inline">
                <h2 className="text-2xl  lg:text-[40px] text-black  mb-4 corbel-bold leading-tight">
                    Grandes volúmenes de transacciones de pagos, pocas personas en tu
                    equipo de cobranzas
                    <span className="text-greenPrimary leading-tight"> ¿Cómo ser más eficiente?</span>
                </h2>
            </div>
            {cardsData.map((cardData, index) => (
                <Card key={index} {...cardData} />
            ))}
        </div>
    );
};

export default CardsSection;
