import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/info-personal', title: 'Información Personal', icon: '👤' },
  { path: '/info-asignatura', title: 'Información de la Materia', icon: '📚' },
  { path: '/que-sigue', title: '¿Qué Sigue?', icon: '🎯' },
  { path: '/medio-ciclo', title: 'Medio Ciclo', icon: '📝' },
  { path: '/aprendizaje-contacto', title: 'Aprendizaje con Docente', icon: '👨‍🏫' },
  { path: '/aprendizaje-practico', title: 'Aprendizaje Práctico', icon: '💡' },
  { path: '/aprendizaje-autonomo', title: 'Aprendizaje Autónomo', icon: '🎓' },
  { path: '/gracias', title: 'Agradecimientos', icon: '🙏' },
];

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/40 to-black/70">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/20741167/pexels-photo-20741167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-cursive text-white mb-4">¡Bienvenido!</h1>
          <p className="text-2xl font-light italic text-white/90">
            Hecho por: Jhon Michael Sánchez Poma
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md p-8 rounded-2xl mb-16"
        >
          <p className="text-xl text-white/90 mb-6 italic">
            "En gastronomía, el marketing transforma sabores en experiencias memorables."
          </p>
          <p className="text-lg text-white/80">
            Este portafolio reúne mis proyectos universitarios en marketing gastronómico, 
            donde estrategia y creatividad se sirven en cada propuesta.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                className="group"
              >
                <Link
                  to={item.path}
                  className="block p-6 rounded-xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:border-white/30
                           transition-all duration-300"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <div className="h-1 w-0 group-hover:w-full bg-white/30 transition-all duration-300"/>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white/70 text-lg mt-12 text-center font-semibold"
        >
          Así que, ¡Empecemos!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;