import React from 'react';

function AprendizajeAutonomo2() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            Aprendizaje Autónomo 2
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Presentación del libro */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Presentación del Libro
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En esta actividad, se realizó la presentación de un libro relacionado con estrategias de marketing y su aplicación en la industria gastronómica. Los estudiantes analizaron los conceptos clave y discutieron su relevancia.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/presentacion-libro.pdf"
                  className="w-full h-64"
                  title="Presentación del Libro"
                ></iframe>
              </div>
            </div>

            {/* Análisis integral de Publicidad Multimedios */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-slideIn animation-delay-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Análisis Integral de Publicidad Multimedios
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Esta sección se enfocó en el análisis integral de campañas publicitarias en diferentes medios. Los estudiantes evaluaron la efectividad de las estrategias utilizadas y propusieron mejoras basadas en los resultados obtenidos.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/analisis-publicidad-multimedios.pdf"
                  className="w-full h-64"
                  title="Análisis Integral de Publicidad Multimedios"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AprendizajeAutonomo2;