import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.5)'
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-7xl font-cursive mb-4 animate-fadeIn">¡Bienvenido!</h1>
        <p className="text-xl font-light italic mb-8 animate-fadeIn animation-delay-300">
          Hecho por: Jhon Michael Sánchez Poma
        </p>
        
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn animation-delay-600">
          <p className="text-lg mb-6">
          “En gastronomía, el marketing transforma sabores en experiencias memorables.”
Este portafolio reúne mis proyectos universitarios en marketing gastronómico, donde estrategia y creatividad se sirven en cada propuesta.

          </p>
          <p className="text-lg font-semibold mb-8">
            Así que, Empezemos!
          </p>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;