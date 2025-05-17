import React from 'react';

const AprendizajePracticoExperimental2: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            Aprendizaje Práctico Experimental
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Defensa de trabajos finales */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Defensa de Trabajos Finales (Exposición Avance 60%)
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En esta actividad, los estudiantes presentaron sus avances en los trabajos finales, defendiendo sus ideas y estrategias ante el docente y sus compañeros. Este ejercicio permitió recibir retroalimentación valiosa para mejorar el proyecto.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/defensa-trabajos-finales.pdf"
                  className="w-full h-64"
                  title="Defensa de Trabajos Finales"
                ></iframe>
              </div>
            </div>

            {/* Venta de productos */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn animation-delay-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Venta de Productos
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Los estudiantes participaron en la venta de productos gastronómicos, aplicando estrategias de marketing y ventas en un entorno real. Esta actividad fomentó habilidades prácticas y de interacción con los clientes.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/venta-productos.pdf"
                  className="w-full h-64"
                  title="Venta de Productos"
                ></iframe>
              </div>
            </div>

            {/* Creación y presentación de la estrategia de marca */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn animation-delay-400">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Creación y Presentación de la Estrategia de Marca: Promoviendo Nuestra Gastronomía
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En esta actividad, los estudiantes diseñaron y presentaron estrategias de marca para promover la gastronomía local. Se enfocaron en la identidad visual, mensajes clave y tácticas de promoción.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/estrategia-marca.pdf"
                  className="w-full h-64"
                  title="Estrategia de Marca"
                ></iframe>
              </div>
            </div>

            {/* Informe de ventas */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-slideIn animation-delay-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Informe de Ventas
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Los estudiantes elaboraron un informe detallado sobre las ventas realizadas, analizando los resultados obtenidos y proponiendo mejoras para futuras actividades comerciales.
              </p>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/informe-ventas.pdf"
                  className="w-full h-64"
                  title="Informe de Ventas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajePracticoExperimental2;