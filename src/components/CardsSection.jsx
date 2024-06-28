import Card from '../components/Card';
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

            <div className="flex space-x-4 mb-4">
            <button className='bg-black p-3 rounded-full'>
            <button
              className={`px-4 py-2 mr-2 rounded-full ${!isCards ? 'bg-white text-Black' : 'bg-none text-white'}`}
              onClick={() => setIsCards(false)}
            >
              Sin Invoinet
            </button>
            <button
              className={`px-4 py-2 rounded-full ${isCards ? 'bg-white text-black' : 'bg-none text-white'}`}
              onClick={() => setIsCards(true)}
            >
              Con Invoinet
            </button>
            </button>
          </div>


            {/*Card personalizado por la esquema de Invoinet*/}


            <div className="flex flex-wrap justify-center mx-20">
                <div className="max-w-[500px] rounded overflow-hidden shadow-lg m-6 p-3">
                    <div className=' rounded   bg-radial hover:overflow-hidden'>
                        <img className="w-full
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 " src={Skeme} alt="Card" />
                    </div>
                    <div className="px-6 py-4">
                    <img src={Data} alt="icon" className='w-[30px] mt-4'/>
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
    );
};

export default CardsSection;
