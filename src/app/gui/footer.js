import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-[#FF8800] text-[#142238]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image className="h-24 w-auto" src="/logo-f.png" alt="Tetrada" width={300} height={300} />
              <p className="text-base">
             Transformamos ideas en impacto.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-[#142238] hover:text-white transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#142238] hover:text-white transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#142238] hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#142238] hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Marketing</a>
                    </li>
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Analiticas</a>
                    </li>
               
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Precios</a>
                    </li>
                    <li>
                      <Link href="https://www.kuberalabs.com" target="_blank"  rel="noopener noreferrer"  className="text-base hover:text-white transition-colors duration-300 text-blue-600">Crea tu web</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">Empresa</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Nosotros</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xl font-bold text-white tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Privacidad</a>
                    </li>
                    <li>
                      <a href="#" className="text-base hover:text-white transition-colors duration-300">Terminos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#142238] pt-8">
            <p className="text-base xl:text-center">&copy; 2024 Tetrada, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;