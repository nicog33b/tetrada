'use client';
import Image from 'next/image';
import React, {useState} from 'react';

import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF8800] text-[#142238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <Image className="h-12 w-auto rounded-lg shadow-md shadow-gray-600" width={300} height={300} src="/tetrada-f-blue.png" alt="Logo" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Inicio</a>
                <a href="/#servicios" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Servicios</a>
                <a href="/nosotros" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Nosotros</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#142238] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors duration-300">
             Contactar
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#142238] hover:bg-[#142238] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FF8800] focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Inicio</a>
            <a href="/#servicios" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Servicios</a>
            <a href="/nosotros" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#142238] hover:text-white transition-colors duration-300">Nosotros</a>
          </div>
          <div className="pt-4 pb-3">
            <button className="blockt rounded-b-md w-full text-center px-4 py-2 text-base font-medium text-white bg-[#142238] hover:bg-opacity-90 transition-colors duration-300">
            Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;