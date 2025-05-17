import React from 'react';

function AprendizajePracticoExperimental() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12">
            Aprendizaje Práctico Experimental
          </h1>

          {/* Caso 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Caso 1: Preparación de Platos Internacionales</h2>
            <p className="text-gray-700 text-lg mb-6">
              En este caso práctico, se trabajó en la preparación de platos internacionales, aplicando técnicas avanzadas de cocina y 
              explorando sabores únicos. Se realizaron análisis de ingredientes y se documentaron los procesos para replicar las recetas.
            </p>

            {/* PDFs del Caso 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Recetas y Técnicas</h3>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/recetas-tecnicas.pdf"
                    className="w-full h-64"
                    title="Recetas y Técnicas"
                  ></iframe>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Análisis de Ingredientes</h3>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/analisis-ingredientes.pdf"
                    className="w-full h-64"
                    title="Análisis de Ingredientes"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Caso 2: Diseño de Menús Temáticos</h2>
            <p className="text-gray-700 text-lg mb-6">
              Este caso práctico consistió en el diseño de menús temáticos para eventos especiales. Se trabajó en la selección de platos, 
              presentación visual y estrategias de marketing para atraer a los clientes. Los resultados fueron documentados en detalle.
            </p>

            {/* PDFs del Caso 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Menús Temáticos</h3>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/menus-tematicos.pdf"
                    className="w-full h-64"
                    title="Menús Temáticos"
                  ></iframe>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Estrategias de Marketing</h3>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="/estrategias-marketing.pdf"
                    className="w-full h-64"
                    title="Estrategias de Marketing"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AprendizajePracticoExperimental;