import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Inicio', icon: '🏠', color: 'bg-blue-500' },
  { path: '/info-personal', label: 'Información Personal', icon: '👤', color: 'bg-purple-500' },
  { path: '/que-sigue', label: '¿Qué Sigue?', icon: '🎯', color: 'bg-cyan-600' },
  { path: '/info-asignatura', label: 'Información de la Materia', icon: '📚', color: 'bg-green-500' },
  { path: '/medio-ciclo', label: 'Medio Ciclo', icon: '📝', color: 'bg-yellow-500' },
  { path: '/aprendizaje-contacto-docente', label: 'Aprendizaje con Docente', icon: '👨‍🏫', color: 'bg-indigo-500' },
  { path: '/aprendizaje-practico-experimental', label: 'Aprendizaje Práctico', icon: '💡', color: 'bg-red-500' },
  { path: '/aprendizaje-autonomo', label: 'Aprendizaje Autónomo', icon: '🎓', color: 'bg-teal-500' },
  { path: '/gracias', label: 'Agradecimientos', icon: '🙏', color: 'bg-pink-500' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = navigationItems.findIndex(item => item.path === location.pathname);
  const prevPage = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const nextPage = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  return (
    <>
      {/* Navegación principal */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50">
        {/* Botón menú */}
        <motion.button
          className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '×' : '≡'}
        </motion.button>

        {/* Flechas de navegación */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex gap-2"
        >
          {prevPage && (
            <button
              onClick={() => navigate(prevPage.path)}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {nextPage && (
            <button
              onClick={() => navigate(nextPage.path)}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Menú circular */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-[550px] h-[550px]"
              onClick={(e) => e.stopPropagation()}
            >
              {navigationItems.map((item, index) => {
                const angle = (index * 360) / navigationItems.length;
                const radius = 210;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.path}
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`flex flex-col items-center justify-center w-28 h-28 rounded-full
                        ${item.color} text-white shadow-lg transform transition-all
                        hover:scale-110 hover:shadow-xl relative`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-[13px] text-center font-semibold px-2 leading-tight">
                        {item.label}
                      </span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 border-2 border-white rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
