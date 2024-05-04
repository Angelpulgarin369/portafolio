import { Routes, Route } from "react-router-dom";
// ? -----------------------------------------------------COMPONENTS

import LandingPage from "./components/landingPage/LandingPage";

// ? -----------------------------------------------------STYLES
import "./App.css";
import Contactos from "./components/contactos/Contactos";
import Experiencia from "./components/experiencia/Experiencia";
import PaginaExperienciaTecnica from "./components/experienciaTecnica/ExperienciaTecnica";
import HabilidadesAdicionales from "./components/habilidadesAdicionales/HabilidadesAdicionales";
import Presentacion from "./components/presentacion/Presentacion";
import Proyectos from "./components/proyectos/Proyectos";
import PaginaFinal from "./components/paginaFinal/PaginaFinal";


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/experienciaTecnica" element={<PaginaExperienciaTecnica />} />
        <Route path="/habilidadesAdicionales" element={<HabilidadesAdicionales />} />
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/paginaFinal" element={<PaginaFinal />} />
        
      </Routes>
     </> 
  );
}

export default App;



