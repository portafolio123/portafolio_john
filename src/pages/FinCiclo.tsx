import React, { useState, useEffect } from 'react';

function FinCiclo() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aún no hemos concluido. Analicemos el Fin de Ciclo.';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Velocidad de escritura
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Título principal */}
            <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
              Fin del Ciclo
            </h1>

            {/* Mensaje introductorio con efecto de escritura */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slideIn">
              <p className="text-gray-700 text-lg text-center">
                <strong>{typedText}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCiclo;