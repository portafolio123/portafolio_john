import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const routes = [
  { path: '/', label: 'Página Principal' },
  { path: '/listo', label: '¿Listo?' },
  { path: '/informacion-personal', label: 'Información Personal' },
  { path: '/que-sigue', label: '¿Qué sigue?' },
  { path: '/informacion-asignatura', label: 'Información de la Asignatura' },
  { path: '/medio-ciclo', label: 'Medio Ciclo' },
  { path: '/aprendizaje-contacto-docente', label: 'Aprendizaje en Contacto con el Docente' },
  { path: '/aprendizaje-practico-experimental', label: 'Aprendizaje Práctico Experimental' },
  { path: '/aprendizaje-autonomo', label: 'Aprendizaje Autónomo' },
  { path: '/fin-ciclo', label: 'Fin de Ciclo' },
  { path: '/aprendizaje-contacto-docente-2', label: 'Aprendizaje en Contacto con el Docente' },
  { path: '/aprendizaje-practico-experimental-2', label: 'Aprendizaje Práctico Experimental' },
  { path: '/aprendizaje-autonomo-2', label: 'Aprendizaje Autónomo' },
  { path: '/logros-alcanzados', label: 'Logros Alcanzados' },
  { path: '/gracias', label: 'Gracias' }
];

const PageNavigation: React.FC = () => {
  const location = useLocation();
  const currentIndex = routes.findIndex(route => route.path === location.pathname);
  
  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
      {prevRoute && (
        <Link
          to={prevRoute.path}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          <span className="hidden sm:inline">{prevRoute.label}</span>
        </Link>
      )}
      
      {nextRoute && (
        <Link
          to={nextRoute.path}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="hidden sm:inline">{nextRoute.label}</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </Link>
      )}
    </div>
  );
};

export default PageNavigation;