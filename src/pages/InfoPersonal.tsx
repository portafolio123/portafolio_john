import React from 'react';
import { motion } from 'framer-motion';
import a from '../assets/images/johnfoto.jpg';
import b from '../assets/images/1.jpg';
import c from '../assets/images/2.jpg';
import d from '../assets/images/3.jpg';
import e from '../assets/images/4.jpg';
import f from '../assets/images/5.jpg';
import g from '../assets/images/7.jpg';
import h from '../assets/images/8.jpg';
import i from '../assets/images/9.jpg';
import j from '../assets/images/10.jpg';

const InfoPersonal: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/32083202/pexels-photo-32083202/free-photo-of-grilled-sausages-on-street-food-market-grill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn p-8">
            {/* Introducción */}
            <h1 className="text-5xl font-cursive text-center text-gray-800 mb-8">
              Hola, soy Jhon Michael Sánchez Poma
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Estudiante de gastronomía en la Escuela Superior Politécnica de Chimborazo. Tengo 19 años, soy parte del curso PAO 3, paralelo 2, y quiero invitarte a conocer no solo mis trabajos académicos, sino también la pasión que me llevó a elegir este camino.
            </p>
            
            {/* Foto principal */}
            <motion.div 
              className="flex justify-center mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
    src={a} 
    alt="Foto de Jhon Michael Sánchez Poma" 
    className="rounded-lg shadow-xl w-full max-w-4xl"
    style={{
      objectFit: 'contain',
      width: '100%',
      height: 'auto',
      maxHeight: '90vh' // This will make sure the image is no taller than 90% of the viewport height
    }}
  />
            </motion.div>

            {/* ¿Por qué gastronomía? */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">¿Por qué gastronomía?</h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Desde pequeño, mi fascinación por los postres me llevó a experimentar en la cocina. Recuerdo cómo me emocionaban programas como Cake Boss, que despertaron en mí el sueño de especializarme en pastelería y chocolatería.
              Hoy, mi objetivo es transformar esa pasión en una carrera profesional sólida, combinando creatividad, técnica y marketing para llevar la gastronomía a otro nivel.
            </p>
            
            {/* Espacio para 2 fotos */}
            <div className="flex gap-6 mb-12">
              <motion.div 
                className="w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={b} 
                  alt="Foto 1" 
                  className="w-full rounded-lg shadow-xl object-cover"
                  style={{ height: '500px' }}
                />
              </motion.div>
              <motion.div 
                className="w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={c} 
                  alt="Foto 2" 
                  className="w-full rounded-lg shadow-xl object-cover"
                  style={{ height: '500px' }}
                />
              </motion.div>
            </div>

            {/* Un poco más sobre mí */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Un poco más sobre mí...</h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Fuera de la cocina, me gusta ir al gimnasio, escuchar música, tocar el piano y viajar. Cada lugar que visito me inspira, porque me permite conocer nuevas culturas y sabores que alimentan mi curiosidad como cocinero.
            </p>
            
            {/* Espacio para 3 fotos */}
            <div className="flex gap-6 mb-12">
              {[d, e, f].map((img, index) => (
                <motion.div 
                  key={index}
                  className="w-1/3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img} 
                    alt={`Foto ${index + 1}`} 
                    className="w-full rounded-lg shadow-xl object-cover"
                    style={{ height: '400px' }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mi motor: la familia */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Mi motor: la familia</h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Mi familia es pequeña: mi madre, mis dos perritas (¡las adoro!) y yo. Pero, aunque seamos pocos, estamos unidos y siempre nos apoyamos.
              Ese amor y respaldo ha sido clave para motivarme a dar lo mejor de mí en cada proyecto.
            </p>
            
            {/* Espacio para 1 foto */}
            <motion.div 
              className="flex justify-center mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={g} 
                alt="Foto de familia" 
                className="w-3/4 rounded-lg shadow-xl object-cover"
                style={{ height: '600px' }}
              />
            </motion.div>

            {/* Momentos que me definen */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Momentos que me definen</h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              A lo largo de este portafolio encontrarás no solo proyectos académicos, sino fragmentos de mi vida que me han formado: conciertos, celebraciones, momentos con amigos y familia...
              Todo lo que me inspira también se refleja en mis ideas y propuestas de marketing gastronómico.
            </p>
            
            {/* Espacio para 3 fotos */}
            <div className="flex gap-6">
              {[h, i, j].map((img, index) => (
                <motion.div 
                  key={index}
                  className="w-1/3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img} 
                    alt={`Foto ${index + 1}`} 
                    className="w-full rounded-lg shadow-xl object-cover"
                    style={{ height: '400px' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;