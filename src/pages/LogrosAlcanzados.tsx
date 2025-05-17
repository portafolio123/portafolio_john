import React, { useState, useEffect } from 'react';

function LogrosAlcanzados() {
  const [typedText, setTypedText] = useState('');
  const fullText =
    'En síntesis, he aprendido que el marketing va más allá de la mera publicidad; se centra en la satisfacción del cliente, la cual es fundamental para el éxito de las empresas. Es igualmente relevante el marketing personal, pues nuestra apariencia actúa como nuestra carta de presentación. Cada tipo de marketing se orienta hacia áreas distintas, pero todos persiguen un objetivo común: satisfacer las expectativas de nuestros consumidores, convirtiéndolos en embajadores de nuestra marca y fomentando así una relación de lealtad.';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Velocidad de escritura
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/784632/pexels-photo-784632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            Logros Alcanzados
          </h1>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-slideIn">
            <p className="text-gray-700 text-lg leading-relaxed">
              {typedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogrosAlcanzados;