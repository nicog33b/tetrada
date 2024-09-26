// components/MarketingComponent.js
import Image from 'next/image';

const MarketingComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-10">
      <div className="md:w-1/2 w-full flex flex-col justify-between space-y-6 md:space-y-10">
        <div className="text-left p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-[#FF8800] text-3xl font-bold mb-2">¿Qué?</h2>
          <p className="text-gray-700 text-lg font-medium">
            Un <span className="font-bold">sistema</span> de producción de servicios de <span className="font-bold">publicidad</span> y <span className="font-bold">marketing</span>.
          </p>
        </div>
        <div className="text-left p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-[#FF8800] text-3xl font-bold mb-2">¿Cómo?</h2>
          <p className="text-gray-700 text-lg font-medium">
            Recibiendo servicios <span className="font-bold">profesionales</span> mediante una <span className="font-bold">plataforma digital</span>.
          </p>
        </div>
        <div className="text-left p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-[#FF8800] text-3xl font-bold mb-2">¿Quiénes?</h2>
          <p className="text-gray-700 text-lg font-medium">
            Demandantes y oferentes de servicios especializados de comunicación.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center justify-between space-y-6 mt-6 md:mt-0">
        <div className="relative w-full h-56 md:h-72 lg:h-80">
          <Image
            src='/marketing1.webp'
            alt="Top Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-56 md:h-72 lg:h-80">
          <Image
            src='/marketing2.webp'
            alt="Bottom Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingComponent;
