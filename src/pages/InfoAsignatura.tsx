import React, { useState } from 'react';
import { motion } from 'framer-motion';
import infoMateria from '/src/assets/images/infomateria.jpg';
import silaboPDF from '/public/silabo.pdf';

const InfoAsignatura: React.FC = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto" // Aumentado de 4xl a 6xl para más espacio
          >
            {/* Título Principal */}
            <h1 className="text-5xl font-cursive text-center text-white mb-12 animate-fadeIn">
              Información de la Materia
            </h1>

            {/* Tarjeta Principal */}
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden mb-8"
            >
              {/* Imagen de la materia a tamaño completo */}
              <div className="overflow-hidden">
                <motion.img
                  src={infoMateria}
                  alt="Información de la materia"
                  className="w-full object-contain"
                  style={{ maxHeight: '600px' }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Contenido */}
              <div className="p-8">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-gray-800 mb-6"
                >
                  Mi objetivo en la asignatura
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-700 text-lg leading-relaxed mb-8"
                >
                  Mi propósito en esta asignatura es adquirir y comprender los fundamentos clave del marketing gastronómico, 
                  para aplicarlos de manera estratégica en mi futuro profesional. Aspiro a desarrollar las habilidades 
                  necesarias que me permitan impulsar y posicionar negocios del sector alimentario, combinando creatividad, 
                  análisis de mercado y técnicas de promoción eficaces.
                </motion.p>

                {/* Visualizador de PDF integrado */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sílabo de la Asignatura
                  </h3>
                  <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden">
                    <iframe
                      src={`${silaboPDF}#view=FitH`}
                      title="Sílabo de la Asignatura"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>

                {/* Mensaje Final */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center italic text-gray-600"
                >
                  <p className="text-lg">
                    Sigue recorriendo este portafolio: cada sección está sazonada con esfuerzo, 
                    pasión y aprendizaje. Estás a punto de descubrir los ingredientes que forman 
                    mi camino profesional.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoAsignatura;