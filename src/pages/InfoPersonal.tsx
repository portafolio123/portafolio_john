import React from 'react';
import a from '../assets/images/johnfoto.jpg'; // Imagen principal
import b from '../assets/images/1.jpg'; // Imagen 1
import c from '../assets/images/2.jpg'; // Imagen 2
import d from '../assets/images/3.jpg'; // Imagen 3
import e from '../assets/images/4.jpg'; // Imagen 4
import f from '../assets/images/5.jpg'; // Imagen 5
import g from '../assets/images/7.jpg'; // Imagen 6
import h from '../assets/images/8.jpg'; // Imagen 7
import i from '../assets/images/9.jpg'; // Imagen 8
import j from '../assets/images/10.jpg'; // Imagen 9


const InfoPersonal: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn p-8">
            {/* Introducción */}
            <h1 className="text-5xl font-cursive text-center text-gray-800 mb-8">
              Hola, soy Jhon Michael Sánchez Poma
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Estudiante de gastronomía en la Escuela Superior Politécnica de Chimborazo. Tengo 19 años, soy parte del curso PAO 3, paralelo 2, y quiero invitarte a conocer no solo mis trabajos académicos, sino también la pasión que me llevó a elegir este camino.
            </p>
            {/* Foto principal */}
            <div className="flex justify-center mb-8">
              <img src={a} alt="Foto de Jhon Michael Sánchez Poma" className="w-1/2 rounded-lg shadow-md" />
            </div>

            {/* ¿Por qué gastronomía? */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Por qué gastronomía?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Desde pequeño, mi fascinación por los postres me llevó a experimentar en la cocina. Recuerdo cómo me emocionaban programas como Cake Boss, que despertaron en mí el sueño de especializarme en pastelería y chocolatería.
              Hoy, mi objetivo es transformar esa pasión en una carrera profesional sólida, combinando creatividad, técnica y marketing para llevar la gastronomía a otro nivel.
            </p>
            {/* Espacio para 2 fotos */}
            <div className="flex gap-4 mb-8">
              <img src={b} alt="Foto 1" className="w-1/2 rounded-lg shadow-md" />
              <img src={c} alt="Foto 2" className="w-1/2 rounded-lg shadow-md" />
            </div>

            {/* Un poco más sobre mí */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Un poco más sobre mí...</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Fuera de la cocina, me gusta ir al gimnasio, escuchar música, tocar el piano y viajar. Cada lugar que visito me inspira, porque me permite conocer nuevas culturas y sabores que alimentan mi curiosidad como cocinero.
            </p>
            {/* Espacio para 3 fotos */}
            <div className="flex gap-4 mb-8">
              <img src={d} alt="Foto 1" className="w-1/3 rounded-lg shadow-md" />
              <img src={e} alt="Foto 2" className="w-1/3 rounded-lg shadow-md" />
              <img src={f} alt="Foto 3" className="w-1/3 rounded-lg shadow-md" />
            </div>

            {/* Mi motor: la familia */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mi motor: la familia</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Mi familia es pequeña: mi madre, mis dos perritas (¡las adoro!) y yo. Pero, aunque seamos pocos, estamos unidos y siempre nos apoyamos.
              Ese amor y respaldo ha sido clave para motivarme a dar lo mejor de mí en cada proyecto.
            </p>
            {/* Espacio para 1 foto */}
            <div className="flex justify-center mb-8">
              <img src={g} alt="Foto de familia" className="w-1/2 rounded-lg shadow-md" />
            </div>

            {/* Momentos que me definen */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Momentos que me definen</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              A lo largo de este portafolio encontrarás no solo proyectos académicos, sino fragmentos de mi vida que me han formado: conciertos, celebraciones, momentos con amigos y familia...
              Todo lo que me inspira también se refleja en mis ideas y propuestas de marketing gastronómico.
            </p>
            {/* Espacio para 3 fotos */}
            <div className="flex gap-4">
              <img src={h} alt="Foto 1" className="w-1/3 rounded-lg shadow-md" />
              <img src={i} alt="Foto 2" className="w-1/3 rounded-lg shadow-md" />
              <img src={j} alt="Foto 3" className="w-1/3 rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;