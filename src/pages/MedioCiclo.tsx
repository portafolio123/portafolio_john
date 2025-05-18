import React from 'react';
import { motion } from 'framer-motion';

const MedioCiclo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/30296794/pexels-photo-30296794/free-photo-of-fresh-oysters-on-ice-with-lemon-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center text-white mb-12"
          >
            El Camino Recorrido: Reflexiones de Medio Ciclo
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            
            

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-16 text-center"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Mirando hacia el Futuro
              </h2>
              <p className="text-gray-600 text-xl mb-4">
                Este es solo el comienzo de una aventura apasionante en el mundo del marketing gastronómico. Con cada proyecto, con cada desafío, estamos escribiendo juntos una nueva página en la historia de la innovación culinaria.
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-blue-600 text-lg font-semibold italic"
              >
                "La excelencia en la gastronomía no solo se cocina en los fogones, 
                también se construye con estrategia, creatividad y pasión."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedioCiclo;