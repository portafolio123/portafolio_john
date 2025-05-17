import React from 'react';

const QueSigue: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12">
            ¿Qué sigue?
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Información Importante
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En las próximas secciones, exploraremos todo lo relacionado con
                la asignatura de Marketing Gastronómico.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Descubra las actividades de aprendizaje diseñadas para mejorar
                sus habilidades en el fascinante mundo de la gastronomía:
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Docente de la Asignatura
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                [Espacio reservado para presentar al docente experto en
                Marketing Gastronómico]
              </p>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xl">
                  Foto o información del docente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueSigue;