import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNavigation from './components/PageNavigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InfoPersonal from './pages/InfoPersonal';
import QueSigue from './pages/QueSigue';
import InfoAsignatura from './pages/InfoAsignatura';
import MedioCiclo from './pages/MedioCiclo';
import AprendizajeContactoDocente from './pages/AprendizajeContactoDocente';
import AprendizajePracticoExperimental from './pages/AprendizajePracticoExperimental';
import AprendizajeAutonomo from './pages/AprendizajeAutonomo';
import FinCiclo from './pages/FinCiclo';
import AprendizajeContactoDocente2 from './pages/AprendizajeContactoDocente2';
import AprendizajePracticoExperimental2 from './pages/AprendizajePracticoExperimental2';
import AprendizajeAutonomo2 from './pages/AprendizajeAutonomo2';
import LogrosAlcanzados from './pages/LogrosAlcanzados';
import Gracias from './pages/Gracias';

import Listo from './pages/Listo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listo" element={<Listo />} />
          <Route path="/informacion-personal" element={<InfoPersonal />} />
          <Route path="/que-sigue" element={<QueSigue />} />
          <Route path="/informacion-asignatura" element={<InfoAsignatura />} />
          <Route path="/medio-ciclo" element={<MedioCiclo />} />
          <Route path="/aprendizaje-contacto-docente" element={<AprendizajeContactoDocente />} />
          <Route path="/aprendizaje-practico-experimental" element={<AprendizajePracticoExperimental />} />
          <Route path="/aprendizaje-autonomo" element={<AprendizajeAutonomo />} />
          <Route path="/fin-ciclo" element={<FinCiclo />} />
          <Route path="/aprendizaje-contacto-docente-2" element={<AprendizajeContactoDocente2 />} />
          <Route path="/aprendizaje-practico-experimental-2" element={<AprendizajePracticoExperimental2 />} />
          <Route path="/aprendizaje-autonomo-2" element={<AprendizajeAutonomo2 />} />
          <Route path="/logros-alcanzados" element={<LogrosAlcanzados />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
        <PageNavigation />
      </div>
      <Footer />
    </Router>
  );
}

export default App;