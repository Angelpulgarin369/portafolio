import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'; 
import { SiMongodb, SiPostgresql } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di'; 
import { FiCode } from 'react-icons/fi'; 
import './Proyectos.css';
import { useNavigate } from 'react-router-dom';

const Proyectos = () => {
  const navigate = useNavigate();

  const handleRentifyClick = () => {
    navigate('/rentify');
  };

  const handleDriversClick = () => {
    navigate('/drivers');
  };

  const goToInicio = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate('/Presentacion'); // Corregido: ahora va a Presentacion.tsx
  };

  const goForward = () => {
    navigate('/ExperienciaTecnica'); // Corregido: ahora va a ExperienciaTecnica.tsx
  };

  return (
    <div className="proyectos">
      <div className="banner-container">
        <div className="banner-center animated-title">
          <h2>Explora Mis Creaciones</h2>
        </div>
      </div>
      <div className="timeline">
        <div className="point-left">
          <div className="banner-left">
            <h3>Rentify</h3>
          </div>
          <p className="content">Durante mi formación en Henry, participé en el proyecto Rentify, una aplicación de gestión de búsqueda de hoteles. Esta experiencia enriquecedora me permitió aplicar mis habilidades técnicas mientras desarrollaba habilidades blandas como la comunicación y la colaboración. Trabajar en equipo me brindó la oportunidad de cultivar la perseverancia y la capacidad de resolver conflictos. Esta etapa fue fundamental para mi desarrollo profesional y personal, permitiéndome crecer tanto a nivel técnico como en habilidades interpersonales.</p>
          <button className="button" onClick={handleRentifyClick}>¡Haz clic para una vista detallada!</button>
          <p className="technologies">Principales Tecnologías Utilizadas</p>
          <div className="icon-container">
            <DiMaterializecss className="proyectos-icon" /> 
            <span>Material-UI</span>
            <FaReact className="proyectos-icon" />
            <span>React</span>
            <FaNodeJs className="proyectos-icon" />
            <span>NodeJs</span>
            <SiMongodb className="proyectos-icon" />
            <span>Mongodb</span>
            <FiCode className="proyectos-icon" /> 
            <span>TypeScript</span>
          </div>
        </div>
        <div className="point-right">
          <div className="banner-right">
            <h3>Drivers</h3>
          </div>
          <p className="content">Mi Proyecto Individual (PI) representó un punto crucial en mi crecimiento como desarrollador. Fusioné teoría y práctica, aplicando habilidades y conocimientos del Bootcamp de Henry para resolver desafíos técnicos de manera efectiva. Esta experiencia me permitió experimentar un crecimiento sustancial en mi capacidad para desarrollar software y para gestionar el tiempo de manera eficiente, marcando un hito significativo en mi trayectoria profesional. Además, en este proyecto integré el consumo de una API de Drivers, lo que me permitió trabajar tanto en el frontend como en el backend, así como en la gestión de la base de datos.</p>
          <button className="button" onClick={handleDriversClick}>¡Haz clic para una vista detallada!</button>
          <p className="technologies">Principales Tecnologías Utilizadas</p>
          <div className="icon-container">
            <FaHtml5 className="proyectos-icon" />
            <span>Html5</span>
            <FaCss3Alt className="proyectos-icon" />
            <span>Css3</span>
            <FaGithub className="proyectos-icon" />
            <span>Github</span>
            <FaNodeJs className="proyectos-icon" />
            <span>JavaScript</span>
            <SiPostgresql className="proyectos-icon" />
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      <div className="icon-container">
        <FaArrowUp onClick={goToInicio} className="icon up-arrow" />
        <FaArrowLeft onClick={goBack} className="icon left-arrow" />
        <FaArrowRight onClick={goForward} className="icon right-arrow" />
      </div>
    </div>
  );
};

export default Proyectos;








  