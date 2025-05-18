import React from 'react';
import { motion } from 'framer-motion';

const AprendizajeAutonomo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center text-white mb-12"
          >
            Aprendizaje Autónomo
          </motion.h1>

          {/* Marca Personal: Mikly */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Marca personal: Mikly</h2>
            <p className="text-gray-700 text-lg mb-6">
              En el vibrante mundo del marketing gastronómico, la marca personal se revela como el condimento esencial que eleva un simple plato a una experiencia memorable, y para mí, "Mikly - Cocinando con amor" ha sido un viaje revelador en este sentido. Más allá de un logo o eslogan, se trata de inyectar autenticidad en cada creación, compartiendo la pasión y la historia que reside detrás de cada receta.
            </p>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/Marca_Personal_Mikly.pdf" className="w-full h-full" title="Marca Personal Mikly"/>
            </div>
          </motion.div>

          {/* Marca de la feria */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Marca de la feria: SanCloé</h2>
            <p className="text-gray-700 text-lg mb-6">
              SanCloé nos enseñó a construir una marca de bebidas naturales que conecta con el público a través de una identidad visual atractiva y un mensaje claro de bienestar. Cada elemento, desde el logo hasta el eslogan, fue clave para diferenciarnos y comunicar nuestra propuesta de valor.
            </p>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/SanCloéInformación_ marca.pdf" className="w-full h-full" title="SanCloé"/>
            </div>
          </motion.div>

          {/* Conceptualización de términos de marketing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conceptualización de términos de marketing</h2>
            <p className="text-gray-700 text-lg mb-6">
              Esta actividad me permitió ver que detrás de cada acción en marketing gastronómico hay conceptos clave que guían las decisiones: segmentación, posicionamiento, fidelización, e incluso cómo influye el eWOM en lo que comemos.
            </p>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/Conceptualización_de_términos_de_Marketing.pdf" className="w-full h-full" title="Conceptualización de Marketing"/>
            </div>
          </motion.div>

          {/* Investigación formativa */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investigación formativa: Influencers y eWOM</h2>
            <p className="text-gray-700 text-lg mb-6">
              Este proyecto me enseñó que hoy, una opinión en redes puede valer más que una gran campaña publicitaria. Aprendí cómo los influencers y el eWOM transforman la forma en que las marcas gastronómicas conectan con sus clientes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/Influencers_eWOMen_Diapositivas.pdf" className="w-full h-full" title="Influencers Diapositivas"/>
              </div>
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/InfluencerseWOMMarketingColaborativo.pdf" className="w-full h-full" title="Influencers Documento"/>
              </div>
            </div>
          </motion.div>

          {/* Restaurants and technology */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Restaurants and technology</h2>
            <p className="text-gray-700 text-lg mb-6">
              Explorar la evolución tecnológica en los restaurantes me hizo ver que el marketing gastronómico también se cocina con datos, sistemas y automatización.
            </p>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/Restaurants_and_technology (2).pdf" className="w-full h-full" title="Restaurants and Technology"/>
            </div>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Modeling Customer Satisfaction</h2>
            <p className="text-gray-700 text-lg mb-6">
              Este análisis me ayudó a entender que el verdadero marketing gastronómico va más allá del sabor: se trata de emociones, ambiente y memorias que invitan a regresar.
            </p>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/modelling_customer.pdf" className="w-full h-full" title="Customer Satisfaction"/>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeAutonomo;