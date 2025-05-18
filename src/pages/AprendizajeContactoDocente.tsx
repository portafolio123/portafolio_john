import React from 'react';
import { motion } from 'framer-motion';

const AprendizajeContactoDocente: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center text-white mb-8"
          >
            Aprendizaje en contacto con el docente
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-center text-white mb-12 italic"
          >
            Donde la teoría cobra vida y el aprendizaje se construye en equipo.
          </motion.h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Sección Materia */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Materia</h3>
              <p className="text-gray-700 text-lg mb-6">
                La materia de marketing gastronómico me ha equipado con un conocimiento profundo para transformar cualquier propuesta culinaria en una experiencia única y atractiva que cautiva a los clientes desde el primer contacto. He aprendido a combinar la creatividad con la estrategia, logrando que cada campaña no solo comunique un mensaje, sino que también despierte emociones y genere lealtad auténtica. Esta especialización me permite aportar valor real a proyectos gastronómicos, optimizando su posicionamiento y crecimiento en un mercado altamente competitivo.
              </p>
              <div className="w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/Materia_del_medio_ciclo.pdf"
                  className="w-full h-full"
                  title="Materia del medio ciclo"
                />
              </div>
            </motion.div>

            {/* Sección Deberes */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Deberes</h3>
              <p className="text-gray-700 text-lg mb-6">
                Los deberes de marketing gastronómico fueron clave para reforzar y consolidar mis conocimientos, ayudándome a desarrollar estrategias más efectivas y creativas para cualquier proyecto culinario.
              </p>
              <div className="w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="/Deberes.pdf"
                  className="w-full h-full"
                  title="Deberes"
                />
              </div>
            </motion.div>

            {/* Sección Actividades en clase */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Actividades en clase</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Experiencia en un restaurante: Mulata</h4>
              <p className="text-gray-700 text-lg mb-6">
                Esta breve presentación sobre "Mulata Restaurante" me recordó que, desde mi perspectiva, el marketing gastronómico va mucho más allá de simplemente vender comida. Se trata de entender y comunicar el "intercambio" multifacético que ocurre en un restaurante: no solo el económico, sino también el social y cultural. La utilidad que ofrecemos toma diversas formas, desde la presentación artística del plato hasta la atmósfera envolvente del lugar. "Mulata Restaurante" me invitó a reflexionar sobre cómo cada uno de estos detalles contribuye a una experiencia completa y memorable, donde el mestizaje cultural se convierte en el ingrediente principal que sazona cada visita.
              </p>
              <div className="w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden mb-8">
                <iframe
                  src="/Mulata_restaurant.pdf"
                  className="w-full h-full"
                  title="Mulata Restaurant"
                />
              </div>
            </motion.div>

            {/* Sección Video Publicitario */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Video Publicitario – Proyecto "Revix: Nutre tu cuerpo"</h3>
              <p className="text-gray-700 text-lg mb-6">
                ¿Y si un simple batido pudiera contar una historia de fuerza, salud y estilo de vida?
                Ese fue el reto que asumimos al crear Revix, una marca pensada para personas que viven el gimnasio no solo como rutina, sino como identidad. Diseñamos un logo con carácter, un eslogan con propósito —"Nutre tu cuerpo"— y un video que no solo vende batidos, sino una filosofía de cuidado personal y superación.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Este proyecto me enseñó que el marketing gastronómico no se trata solo de vender productos, sino de conectar con emociones, hábitos y aspiraciones. Aprendí cómo una marca puede hablar el mismo idioma que su público y convertirse en parte de su día a día.
              </p>
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src="/src/assets/images/video.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <p className="text-xl text-gray-800 font-semibold mb-4">
                ¿Te sorprendió lo que un simple batido puede lograr?
              </p>
              <p className="text-gray-700 text-lg italic">
                Entonces prepárate, porque lo que viene en las siguientes páginas está cargado de ideas igual de poderosas.
                Sigue explorando… aún queda mucho sabor por descubrir.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente;