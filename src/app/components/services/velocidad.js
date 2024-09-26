import Image from 'next/image';

export default function Velocidad() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-500 mb-6">Velocidad</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-orange-200 rounded-full transform -rotate-6"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-md z-10">
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <line x1="100" y1="20" x2="100" y2="180" stroke="#FF6B35" strokeWidth="2" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#FF6B35" strokeWidth="2" />
              <circle cx="100" cy="100" r="5" fill="#FF6B35" />
              <text x="90" y="40" className="text-lg font-bold z-20" fill="#1B3A4B">Observación</text>
              <text x="130" y="105" className="text-lg font-bold  z-20" fill="#1B3A4B">Acción</text>
              <text x="20" y="105" className="text-lg font-bold  z-20" fill="#1B3A4B">Decisión</text>
              <text x="90" y="170" className="text-lg font-bold  z-20" fill="#1B3A4B">Orientación</text>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/avion.webp"
            alt="Jet plane representing speed"
            width={400}
            height={300}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-4 text-gray-700 text-lg">
            La velocidad en nuestro servicio se refleja en la rápida toma de decisiones y acciones, 
            basadas en una observación aguda y una orientación clara.
          </p>
        </div>
      </div>
    </div>
  );
}