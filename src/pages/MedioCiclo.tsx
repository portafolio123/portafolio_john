import React from 'react';

const MedioCiclo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12">
            Medio Ciclo
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Reflexión de Medio Ciclo
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Se recorrerá el ciclo en dos partes, comenzando con el Medio Ciclo. 
                Este es un momento clave para reflexionar sobre los logros alcanzados, 
                los aprendizajes obtenidos y los desafíos que aún quedan por superar.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Aproveche esta oportunidad para ajustar sus estrategias y establecer 
                metas claras para la segunda mitad del ciclo.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                ¡Sigamos avanzando!
              </h2>
              <p className="text-gray-600 text-lg">
                Recuerde que cada paso cuenta y que el esfuerzo de hoy será la base 
                del éxito de mañana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedioCiclo;