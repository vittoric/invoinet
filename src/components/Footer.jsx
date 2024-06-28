import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/fb.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/insta.svg';
import youtube from '../assets/ytb.svg';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='flex justify-center'>
                <hr className='w-[95%] ' />
            </div>
            <div className=" p-16 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <img src={logo} alt="Invoinet Logo" className="w-40 h-auto mb-4" />
                    <div className="flex space-x-4 mt-16 mb-4">
                        <a href="http://" target="_blank" className="flex items-center">
                            <img src={facebook} alt="" className='w-6 h-6' />
                        </a>
                        <a href="http://" target="_blank" className="flex items-center">
                            <img src={linkedin} alt="" className='w-6 h-6' />
                        </a>
                        <a href="http://" target="_blank" className="flex items-center">
                            <img src={youtube} alt="" className='w-6 h-6' />
                        </a>
                        <a href="http://" target="_blank" className="flex items-center">
                            <img src={instagram} alt="" className='w-6 h-6' />
                        </a>
                    </div>
                    <p className="text-sm text-center mt-6 md:text-left roboto-light text-gray-500">
                        Copyright &copy; 2024 Invoinet. Todos los derechos reservados.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="text-center md:text-left space-y-6 ">
                        <h3 className="roboto-medium text-black mb-2">Servicios</h3>
                        <ul className="roboto-light space-y-6 ">
                            <li><a href="http://" target="_blank" rel="">Conciliación Masiva</a></li>
                            <li><a href="http://" target="_blank" rel="">Portal de cobranza</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left space-y-6 ">
                        <h3 className="roboto-medium text-black mb-2 space-y-4">Compañía</h3>
                        <ul className="space-y-6 roboto-light ">
                            <li><a href="http://" target="_blank" rel="">Sobre Nosotros</a></li>
                            <li><a href="http://" target="_blank" rel="">Casos de estudio</a></li>
                            <li><a href="http://" target="_blank" rel="">Agenda una reunion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
