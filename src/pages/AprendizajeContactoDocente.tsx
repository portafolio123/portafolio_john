import React from 'react';

const AprendizajeContactoDocente: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            Aprendizaje en Contacto con el Docente
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-slideIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Resumen de lo Visto
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Durante las sesiones de aprendizaje en contacto con el docente, se abordaron temas clave relacionados con la asignatura. 
                Se realizaron actividades prácticas, discusiones teóricas y se resolvieron dudas específicas para reforzar los conceptos aprendidos.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Además, se ofrecieron herramientas y estrategias para aplicar los conocimientos en contextos reales, 
                promoviendo un aprendizaje significativo y colaborativo.
              </p>
            </div>

            {/* Espacios para visualizar PDFs */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-fadeIn animation-delay-300">
                <h3 className="text-xl font-semibold mb-4">Material Complementario 1</h3>
                <p className="text-gray-700 mb-4">
                  Visualiza el PDF con información adicional sobre los temas tratados en las sesiones.
                </p>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/material1.pdf"
                    className="w-full h-64"
                    title="Material Complementario 1"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-fadeIn animation-delay-600">
                <h3 className="text-xl font-semibold mb-4">Material Complementario 2</h3>
                <p className="text-gray-700 mb-4">
                  Visualiza el PDF con ejercicios prácticos y ejemplos trabajados durante las clases.
                </p>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/material2.pdf"
                    className="w-full h-64"
                    title="Material Complementario 2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente;