import React from 'react';

const AprendizajeContactoDocente2: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12">
            Aprendizaje en Contacto con el Docente - Segunda Parte
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Proyectos en el aula / Tendencias de consumo */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Proyectos en el Aula / Tendencias de Consumo
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En este apartado se analizaron las tendencias de consumo actuales y cómo estas influyen en el diseño de estrategias de marketing gastronómico. Se realizaron proyectos prácticos en el aula para aplicar estos conceptos.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/proyectos-tendencias-consumo.pdf"
                  className="w-full h-64"
                  title="Proyectos en el Aula / Tendencias de Consumo"
                ></iframe>
              </div>
            </div>

            {/* Taller: Comportamiento de la Generación Y a la hora de cenar */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Taller: Comportamiento de la Generación Y a la Hora de Cenar
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Este taller se enfocó en comprender los patrones de comportamiento de la Generación Y (Millennials) al momento de elegir restaurantes y cenar. Se exploraron factores como preferencias, hábitos y expectativas.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/comportamiento-generacion-y.pdf"
                  className="w-full h-64"
                  title="Taller: Comportamiento de la Generación Y a la Hora de Cenar"
                ></iframe>
              </div>
            </div>

            {/* Motivaciones, compromiso y adopción del e-WOM en restaurantes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Motivaciones, Compromiso y Adopción del e-WOM en Restaurantes
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En esta sección se estudiaron las motivaciones y el compromiso de los consumidores al adoptar el e-WOM (electronic Word of Mouth) en el contexto de restaurantes. Se analizaron casos prácticos y estrategias para aprovechar esta herramienta.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/motivaciones-ewom.pdf"
                  className="w-full h-64"
                  title="Motivaciones, Compromiso y Adopción del e-WOM en Restaurantes"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente2;