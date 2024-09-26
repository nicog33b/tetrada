// components/Nosotros.js

import React from 'react';

const Nosotros = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Un camino para avanzar...
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Marshal McLuhan, en el final de su carrera, hizo un aporte innovador: el concepto de{' '}
          <span className="font-semibold">tétrada</span>. "Las leyes de los medios en forma de
          tétrada pertenecen a la retórica y la gramática, no a la filosofía. Nuestro estudio se
          basa en etimología y exégesis. El motivo de esto es colocar los estudios de los artefactos
          en un plano humanístico y lingüístico por primera vez". (McLuhan y McLuhan, 1992).
        </p>
        <p className="text-lg text-gray-700 mb-12">
          En el centro del concepto de tétrada está el artefacto, y se delimita por cuatro lados:
          <span className="font-semibold"> mejora</span>, <span className="font-semibold">obsoleta</span>,
          <span className="font-semibold"> recupera</span>, <span className="font-semibold">invierte</span>.
          Todo artefacto ideado por el hombre puede ser colocado en el centro de un cuadrado y, a
          partir de eso, analizar ¿qué mejora su aporte?, o, su contrario, ¿qué vuelve obsoleto?;
          o, desde otro lado, ¿qué recupera el artefacto? o ¿qué invierte?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué mejora, extiende o intensifica este nuevo proceso de hacer marketing?
            </h3>
            <p className="text-lg text-gray-700">
              Crea datos muy segmentados, se conoce e interactúa más con el cliente. El potencial uso
              de una plataforma hace posible a los clientes obtener servicios de profesionales
              altamente capacitados, evitando costos fijos que encarecen el servicio, basados en
              tecnologías digitales disponibles y de aprendizaje colaborativo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué vuelve obsoleto o qué desplaza el nuevo proceso para demandar y obtener servicios de marketing?
            </h3>
            <p className="text-lg text-gray-700">
              El peso de los medios de comunicación dominantes del siglo XX se ha vuelto obsoleto.
              Hoy los medios son globales y ubicuos y su uso está en función de llevar tráfico a los
              contenidos generados para los clientes. Procesos de trabajo anteriores a las
              tecnologías de informática distributiva son ahora obsoletos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué recupera el nuevo proceso de marketing?
            </h3>
            <p className="text-lg text-gray-700">
              La demanda, siempre existente, de tener marketing de calidad que gestione los datos de
              comportamiento de clientes y consumidores, y hacerlo a nivel local, continental y
              global.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué invierte el nuevo proceso de marketing?
            </h3>
            <p className="text-lg text-gray-700">
              Pasa del marketing del "mass media" propio del siglo XX, al de creación de contenidos y
              de gestión de los datos de los usuarios y clientes. Y así genera una comunidad
              interesada en soluciones de marketing locales y globales.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Qué genera o en qué se convierte el proceso de servicios tétrada en la red cuando se lo presiona al extremo?
          </h3>
          <p className="text-lg text-gray-700">
            Genera una comunidad interesada en el marketing global y local. Una cadena de
            colaboradores que absorbe encargos del núcleo, manteniendo una estructura de bajo costo.
            Un grupo de demandantes de servicios de publicidad, comunicación y marketing de calidad
            global. De la persona a la comunidad, todos unidos por la visión de una forma de hacer
            que preserve la biosfera y la civilización humana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
