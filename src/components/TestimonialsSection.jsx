import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: '“Danone es una empresa muy estructurada en sus procesos y documentación. Invoinet se adaptó rápido a nuestro contexto, nos da seguridad, acceso a información precisa y nos ayudó a minimizar los procesos manuales y errores”',
      name: 'DEBORA MIRANDA',
      position: 'GERENTE DE CRÉDITO Y COBRANZAS EN DANONE',
      country: '🇧🇷'
    },
    {
      quote: '“Invoinet es nuestra mano derecha en la cobranza. Nos ayudan a gestionar los cheques de pago de largo plazo, a retirar las cobranzas y cargar la información a la plataforma. Su respuesta siempre es inmediata, y se alinean a nuestra cultura de trabajo”',
      name: 'LIONEL GUERRA',
      position: 'JEFE DE CUENTAS CORRIENTES EN ARCOR',
      country: '🇦🇷'
    },
    {
      quote: '“Invoinet ha sido una herramienta fundamental para optimizar nuestros procesos de cobranza y reducir el tiempo de gestión. La interfaz es intuitiva y el soporte técnico es excelente.”',
      name: 'MARCOS LÓPEZ',
      position: 'DIRECTOR FINANCIERO EN TELECOM',
      country: '🇲🇽'
    },
    {
      quote: '“Gracias a Invoinet, hemos mejorado significativamente la precisión de nuestras facturas y el seguimiento de pagos. Su plataforma nos proporciona una visibilidad completa de nuestras operaciones.”',
      name: 'ANA PÉREZ',
      position: 'GERENTE DE OPERACIONES EN BANCO XYZ',
      country: '🇨🇴'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 lg:px-0 my-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl lg:text-[40px] corbel-bold leading-tight  text-myBlack mb-10 lg:mb-28">
          Conoce por qué algunas empresas líderes <br className="hidden lg:block" /> en Latinoamérica eligen a Invoinet
        </h2>
        <div className="relative">
          {/* Flechas de navegación personalizadas */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev-custom text-black p-2 text-2xl lg:text-4xl mt-80">
              &larr;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="swiper-button-next-custom text-black p-2 text-2xl lg:text-4xl mt-80">
              &rarr;
            </button>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                  <p className="text-lg leading-6 mb-4">{testimonial.quote}</p>
                  <div className="mt-auto border-l-4 border-white pl-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.position}</p>
                    <p className="text-sm">{testimonial.country}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
