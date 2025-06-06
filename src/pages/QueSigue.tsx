import React from 'react';
import docenteFoto from '../assets/images/docente.jpg'; // Cambia la ruta y nombre según tu imagen

const QueSigue: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/32049140/pexels-photo-32049140/free-photo-of-delicious-gourmet-salad-with-assorted-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4">
          

          <div className="max-w-4xl mx-auto">
            {/* Nueva sección de bienvenida */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Qué encontrarás aquí?
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Verás proyectos que integran creatividad, estrategia y pasión por la gastronomía. Cada trabajo es una muestra de lo que soy capaz de construir cuando la inspiración se encuentra con el conocimiento.
              </p>
              <div className="flex flex-col items-center mb-4">
                <span className="text-xl font-semibold text-gray-800 mb-2">
                  Ing. Giovanny Haro Sosa, Phd.
                </span>
                <img
                  src={docenteFoto}
                  alt="Foto del docente"
                  className="rounded-lg shadow-xl w-80 h-80 object-cover mb-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-700 text-lg mb-2">
                Explora, conecta y descubre mi mundo de marketing gastronómico.
              </p>
            </div>

          

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueSigue;