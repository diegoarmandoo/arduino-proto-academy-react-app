import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar.tsx';
import Footer from '../components/footer.tsx';
import Model3D from './model3d.tsx';
import Quiz from './quiz.tsx';
import Prototipacao from './prototipacao.tsx';
import Arduino from './arduino.tsx';
import DispositivosEntrada from './dispositivos-entrada.tsx';
import DispositivosSaida from './dispositivos-saida.tsx';
import ModulosComunicacao from './modulos-comunicacao.tsx';
import FonteAlimentacao from './fonte-alimentacao.tsx';
import PlacasConectores from './placas-conectores.tsx';
import VideoArduino from './video-arduino.tsx';

const Home: React.FC = () => {
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-1 flex justify-center items-center">
                <Routes>
                    <Route path="/" element={<VideoArduino />} />
                    <Route path="/prototipacao" element={<Prototipacao />} />
                    <Route path="/arduino" element={<Arduino />} />
                    <Route path="/dispositivos-entrada" element={<DispositivosEntrada />} />
                    <Route path="/dispositivos-saida" element={<DispositivosSaida />} />
                    <Route path="/modulos-comunicacao" element={<ModulosComunicacao />} />
                    <Route path="/fonte-alimentacao" element={<FonteAlimentacao />} />
                    <Route path="/placas-conectores" element={<PlacasConectores />} /> 
                    <Route path="/model/:modelID" element={<Model3D />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </main>
            <Footer />
        </div>
      </Router>
    );
  };
  
export default Home;