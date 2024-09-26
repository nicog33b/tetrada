import Image from 'next/image';

export default function Foco() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-500 mb-6">Foco</h2>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between space-y-8 md:space-y-0 md:space-x-8 md:space-x-reverse">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full transform rotate-12"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-md z-10">
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <polygon points="100,20 180,150 20,150" fill="none" stroke="#FF6B35" strokeWidth="2" />
              <circle cx="100" cy="100" r="30" fill="#FF6B35" fillOpacity="0.2" />
              <text x="70" y="50" className="text-xs font-bold z-20" fill="#1B3A4B">Proceso digital</text>
              <text x="80" y="160" className="text-xs font-bold z-20" fill="#1B3A4B">Madurez tecnológica</text>
              <text x="0" y="140" className="text-xs font-bold z-20" fill="#1B3A4B">Transformación digital</text>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/foco.webp"
            alt="Hands working on laptop with data visualization"
            width={400}
            height={300}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-4 text-gray-700 text-lg">
            Nuestro foco está en construir un proceso digital que transfiera valor a los usuarios, 
            avanzando hacia una madurez tecnológica en la gestión de marketing y fomentando la 
            transformación digital de las organizaciones.
          </p>
        </div>
      </div>
    </div>
  );
}