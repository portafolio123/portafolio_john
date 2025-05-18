import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation(); // Para detectar la ruta activa

  const mainLinks = [
    { path: '/', label: 'Página Principal' },
    { path: '/listo', label: '¿Listo?' },
    { path: '/informacion-personal', label: 'Información Personal' },
    { path: '/que-sigue', label: '¿Qué sigue?' },
    { path: '/informacion-asignatura', label: 'Información de la Asignatura' },
    { path: '/medio-ciclo', label: 'Medio Ciclo' },
    { path: '/aprendizaje-contacto-docente', label: 'Aprendizaje en Contacto con el Docente' },
  ];

  const moreLinks = [
    { path: '/aprendizaje-practico-experimental', label: 'Aprendizaje Práctico Experimental' },
    { path: '/aprendizaje-autonomo', label: 'Aprendizaje Autónomo' },
    /*
    { path: '/fin-ciclo', label: 'Fin de Ciclo' },
    { path: '/aprendizaje-contacto-docente-2', label: 'Aprendizaje en Contacto con el Docente' },
    { path: '/aprendizaje-practico-experimental-2', label: 'Aprendizaje Práctico Experimental' },
    { path: '/aprendizaje-autonomo-2', label: 'Aprendizaje Autónomo' },
    { path: '/logros-alcanzados', label: 'Logros Alcanzados' },
     */
    { path: '/gracias', label: 'Gracias' },
  ];

  const handleMoreLinkClick = () => {
    setIsMoreOpen(false); // Cierra el menú desplegable al hacer clic en un enlace
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="text-xl font-semibold text-gray-800">Portafolio</div>

          {/* Main Links */}
          <div className="hidden md:flex items-center space-x-4 ml-10">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-blue-500 shadow-md scale-105'
                    : 'text-gray-700 hover:text-white hover:bg-blue-500 hover:shadow-md hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                Más <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 animate-slideDown">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
                      onClick={handleMoreLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Icon */}
          <div className="ml-auto flex items-center">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none transition-all duration-300">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden ml-4">
            <button className="text-gray-500 hover:text-gray-900 focus:outline-none transition-all duration-300">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;