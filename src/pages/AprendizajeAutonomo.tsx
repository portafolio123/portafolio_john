import React from 'react';

function AprendizajeAutonomo() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            Aprendizaje Autónomo
          </h1>

          {/* Investigación Formativa */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investigación Formativa</h2>
            <p className="text-gray-700 text-lg mb-6">
              En esta sección se aborda la importancia de la investigación formativa como herramienta para el aprendizaje autónomo, 
              permitiendo a los estudiantes desarrollar habilidades críticas y analíticas.
            </p>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/investigacion-formativa.pdf"
                className="w-full h-64"
                title="Investigación Formativa"
              ></iframe>
            </div>
          </div>

          {/* Conceptos de Marketing */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn animation-delay-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conceptos de Marketing</h2>
            <p className="text-gray-700 text-lg mb-6">
              En esta sección se exploran los conceptos fundamentales del marketing, incluyendo su importancia en la creación de valor para los clientes y las empresas.
            </p>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/conceptos-marketing.pdf"
                className="w-full h-64"
                title="Conceptos de Marketing"
              ></iframe>
            </div>
          </div>

          {/* Satisfacción y Lealtad */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn animation-delay-400">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Satisfacción y Lealtad</h2>
            <p className="text-gray-700 text-lg mb-6">
              Esta sección aborda cómo medir y mejorar la satisfacción del cliente, así como estrategias para fomentar la lealtad a largo plazo.
            </p>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/satisfaccion-lealtad.pdf"
                className="w-full h-64"
                title="Satisfacción y Lealtad"
              ></iframe>
            </div>
          </div>

          {/* Branding */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn animation-delay-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Branding</h2>
            <p className="text-gray-700 text-lg mb-6">
              En esta sección se estudian las estrategias de branding, incluyendo cómo construir y gestionar marcas fuertes en el mercado.
            </p>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/branding.pdf"
                className="w-full h-64"
                title="Branding"
              ></iframe>
            </div>
          </div>

          {/* Segmentación de Mercados */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slideIn animation-delay-800">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Segmentación de Mercados</h2>
            <p className="text-gray-700 text-lg mb-6">
              Esta sección se enfoca en la segmentación de mercados, identificando grupos de consumidores con necesidades similares para diseñar estrategias específicas.
            </p>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/segmentacion-mercados.pdf"
                className="w-full h-64"
                title="Segmentación de Mercados"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AprendizajeAutonomo;