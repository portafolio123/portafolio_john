import React from 'react';
import { motion } from 'framer-motion';
import bonitaBananaImg from '../assets/images/bonita_banana.jpg'


const AprendizajePracticoExperimental: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center text-white mb-12"
          >
            Aprendizaje Práctico Experimental
          </motion.h1>

          {/* Caso Starbucks */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Caso Starbucks</h2>
            <p className="text-gray-700 text-lg mb-6">
              Estudiar Starbucks me mostró que el éxito de una marca no está solo en el producto, 
              sino en la experiencia que se crea a su alrededor. Aprendí cómo el marketing sensorial, 
              la personalización, la sostenibilidad y la tecnología pueden convertir algo tan cotidiano 
              como un café, en un ritual emocional que conecta con millones de personas.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/Caso_Starbucks_Diapositivas.pdf" className="w-full h-full" title="Diapositivas Starbucks"/>
              </div>
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/Caso_starbucks.pdf" className="w-full h-full" title="Caso Starbucks"/>
              </div>
              
            </div>
            <p className="text-gray-700 text-lg italic">
              Y si una taza de café puede lograr tanto... imagina lo que podemos lograr con una buena estrategia gastronómica.
            </p>
          </motion.div>

          {/* Caso Crepes & Waffles */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Caso Crepes & Waffles</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/CasoCrepesWaffles_Diapositivas.pdf" className="w-full h-full" title="Diapositivas Crepes & Waffles"/>
              </div>

              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/AnálisisEstratégicodeCrepes&Waffles.pdf" className="w-full h-full" title="Análisis Crepes & Waffles"/>
              </div>
              
            </div>
            <p className="text-gray-700 text-lg italic">
              Esta investigación fue el mejor ejemplo de cómo el marketing gastronómico no se sirve en bandeja: 
              se crea, se siente y se vive. Entender a Crepes & Waffles fue saborear estrategia con propósito.
            </p>
          </motion.div>

          {/* Marca Grupal */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Marca Grupal</h2>
            <p className="text-gray-700 text-lg mb-6">
              Crear la marca grupal "Bon Appétit" nos demostró que en marketing gastronómico, 
              cada detalle cuenta para conectar con el cliente. Desde el logo minimalista que evoca deseo, 
              hasta el eslogan que promete una experiencia única, construimos una identidad que va más allá 
              de vender postres: vendemos emociones.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/MARCA_GRUPAL_Bon Appetit.pdf" className="w-full h-full" title="Marca Grupal Bon Appetit"/>
              </div>
              <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe src="/Marca grupal.pdf" className="w-full h-full" title="Marca Grupal"/>
              </div>
            </div>
          </motion.div>

          {/* Investigación Bonita Banana */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investigación sobre Bonita Banana</h2>
            <p className="text-gray-700 text-lg mb-6">
              Con esta investigación comprendí cómo una empresa tradicional del sector agrícola, como Bonita Banana, puede evolucionar y adaptarse a cada etapa del marketing, desde la producción masiva hasta la hiperpersonalización digital. Aprendí que el marketing no es estático, sino que crece junto a las necesidades del consumidor y los avances tecnológicos.
            </p>

            {/* Imagen animada */}
            {/* Imagen en un frame pequeño que muestra todo */}
            <div className="w-full h-[400px] border border-gray-300 rounded-lg overflow-auto mb-6 flex items-center justify-center bg-white">
              <img
                src={bonitaBananaImg}
                alt="Bonita Banana"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe 
                src="/BonitaBanana.pdf" 
                className="w-full h-full" 
                title="Bonita Banana" 
              />
            </div>

            <p className="text-gray-700 text-lg italic">
              Este trabajo me dejó una lección clara: si una empresa quiere crecer, 
              debe evolucionar con su mercado. Y el marketing es el camino para lograrlo.
            </p>
          </motion.div>


          {/* Variables intervinientes del marketing */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Variables intervinientes del marketing</h2>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden mb-6">
              <iframe src="/Variablesintervinientesdelmarketing.pdf" className="w-full h-full" title="Variables Marketing"/>
            </div>
            <p className="text-gray-700 text-lg">
              Este trabajo me permitió ver cómo cada variable del marketing gastronómico se entrelaza 
              para crear experiencias únicas. Aprender a aplicar estos conceptos con ejemplos reales 
              no solo reforzó mis conocimientos, también me mostró cómo conectar con los gustos, 
              emociones y valores del cliente actual.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajePracticoExperimental;