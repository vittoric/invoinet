import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md h-32 flex items-center">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="InvoiNet" className="h-10 mr-3" />
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#inicio" className="text-gray-600 hover:text-black roboto-regular text-18px">Inicio</a>
          <a href="#nosotros" className="text-gray-600 hover:text-gray-800 roboto-regular text-18px">Nosotros</a>
          <a href="#page" className="text-gray-600 hover:text-gray-800 roboto-regular text-18px">Page</a>
          <button className="bg-gradient-to-b from-customTealLight to-customTealDark text-white px-6 py-2 custom-height rounded-full text-16px">
            Conversa con un experto
          </button>
          <button className="border border-gray-400 text-gray-600 px-6 py-2 custom-height rounded-full text-16px">
            Iniciar sesión
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-20 left-0 w-full px-4 py-2">
          <a href="#inicio" className="block text-gray-600 hover:text-black roboto-regular text-18px mb-2">Inicio</a>
          <a href="#nosotros" className="block text-gray-600 hover:text-gray-800 roboto-regular text-18px mb-2">Nosotros</a>
          <a href="#page" className="block text-gray-600 hover:text-gray-800 roboto-regular text-18px mb-2">Page</a>
          <button className="block w-full bg-gradient-to-b from-customTealLight to-customTealDark text-white px-6 py-2 custom-height rounded-full text-16px mb-2">
            Conversa con un experto
          </button>
          <button className="block w-full border border-gray-400 text-gray-600 px-6 py-2 custom-height rounded-full text-16px">
            Iniciar sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;