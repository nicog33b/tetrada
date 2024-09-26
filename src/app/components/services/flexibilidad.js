import Image from 'next/image';

export default function Flexibilidad() {
  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-500 mb-6">Flexibilidad</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-red-200 rounded-full transform -rotate-3"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-md z-10">
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <polygon points="100,20 180,150 20,150" fill="none" stroke="#FF6B35" strokeWidth="2" />
              <polygon points="100,60 140,130 60,130" fill="none" stroke="#1B3A4B" strokeWidth="1" />
              <text x="85" y="45" className="text-xs font-bold z-20" fill="#1B3A4B">Sistema y empatía</text>
              <text x="125" y="140" className="text-xs font-bold z-20" fill="#1B3A4B">Desafíos</text>
              <text x="30" y="140" className="text-xs font-bold z-20"  fill="#1B3A4B">Creatividad</text>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/flexibilidad.webp"
            alt="Red paper cutout figures holding hands"
            width={400}
            height={300}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-4 text-gray-700 text-lg">
            Nuestra flexibilidad se basa en un sistema empático, enfrentando desafíos y resolviendo 
            problemas mediante relaciones entre las personas. Ofrecemos creatividad y conocimiento 
            técnico a pequeños grupos para lograr un bien común.
          </p>
        </div>
      </div>
    </div>
  );
}