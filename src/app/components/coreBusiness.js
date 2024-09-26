// components/CoreBusiness.js

import Image from 'next/image';


const CoreBusiness = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-orange-500">
      {/* Fondo de la imagen a la derecha */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image 
          src='/engranajes.webp'
          alt="Gears Background" 
          layout="fill" 
          objectFit="cover" 
          className="object-cover"
        />
      </div>
      
      {/* Contenido del círculo */}
      <div className="relative z-10 flex items-center justify-center w-full md:w-1/2">
        <div className="p-8 bg-white rounded-full shadow-xl max-w-md">
          <h2 className="text-4xl font-bold text-orange-600 text-center">Core Business</h2>
          <p className="mt-4 text-center text-gray-700">
            Un sistema sobre una plataforma y procesos de trabajo, para demandar y ofrecer servicios especializados de <span className="font-bold">publicidad y marketing</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreBusiness;
