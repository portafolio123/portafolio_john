import React from 'react';
import { motion } from 'framer-motion';

function Gracias() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Frase inspiradora */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-center text-white mb-6">
              "La cocina es donde los sueños se transforman en memorias inolvidables"
            </h1>
            <p className="text-2xl font-light text-center text-white mb-12 italic">
              - Una pasión que trasciende los ingredientes
            </p>
          </motion.div>

          {/* Mensaje principal */}
          

          {/* Sección final */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/90 rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                "El verdadero éxito es el camino que recorremos"
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Cada proyecto presentado aquí representa un paso más en mi formación 
                como profesional del marketing gastronómico. Gracias por ser parte 
                de esta historia que apenas comienza.
              </p>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                ¡Hasta pronto!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Gracias;