import Image from 'next/image';

export default function ServicioCaracteristicas() {
  const caracteristicas = [
    { title: "Foco", desc: "Una estrategia definida" },
    { title: "Velocidad", desc: "En los procesos de trabajo, innovación y aprendizaje" },
    { title: "Flexibilidad", desc: "Adaptabilidad de la estructura de trabajo" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
      {/* Sección de imagen */}
      <div className="lg:w-1/2 h-[300px] lg:h-screen w-full lg:order-1 relative mb-8 lg:mb-0">
        <Image
          src="/cascada.webp"
          alt="Características del servicio"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 via-transparent to-transparent"></div>
      </div>
      
      {/* Sección de características */}
      <div className="lg:w-1/2 space-y-6 lg:space-y-8 z-10 lg:pl-8">
        {caracteristicas.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-l-4 border-orange-500"
          >
            <h2 className="text-2xl font-bold text-orange-600 mb-2">{item.title}</h2>
            <p className="text-gray-700 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}