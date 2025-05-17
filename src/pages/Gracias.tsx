import React from 'react';

function Gracias() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Frase motivadora */}
          <h1 className="text-4xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            "La gastronomía es el arte de usar la comida para crear felicidad."
            <br />
            <span className="text-xl font-light">- Theodore Zeldin</span>
          </h1>

          {/* Mensaje de agradecimiento */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              ¡Gracias por visitar mi portafolio!
            </h2>
            <p className="text-gray-700 text-lg text-center">
              Espero que hayas disfrutado explorando mi trabajo y mis logros. Este portafolio refleja mi pasión por la gastronomía y mi compromiso con el aprendizaje continuo.
            </p>
          </div>

          {/* Foto de la persona */}
          <div className="flex justify-center animate-zoomIn">
            <img
              src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
              alt="Persona"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gracias;