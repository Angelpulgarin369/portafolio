import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFileAlt, FaArrowCircleUp, FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para manejar la navegación

import './ExperienciaTecnica.css';

const ExperienciaTecnica = () => {
  const navigate = useNavigate(); // Creamos una instancia de useNavigate

  const handleGoToTop = () => {
    navigate('/'); // Navegamos a la página de inicio (LandingPage)
  };

  const handleGoToProjects = () => {
    navigate('/proyectos'); // Navegamos a la página de proyectos
  };

  const handleGoToExperience = () => {
    navigate('/experiencia'); // Navegamos a la página de experiencia
  };

  return (
    <div className="experiencia-tecnica">
      <div className="navigation-icons">
        {/* Icono de ir al principio */}
        <FaArrowCircleUp className="navigation-icon" onClick={handleGoToTop} />
        {/* Icono de flecha hacia atrás */}
        <FaArrowCircleLeft className="navigation-icon" onClick={handleGoToProjects} />
        {/* Icono de flecha hacia adelante */}
        <FaArrowCircleRight className="navigation-icon" onClick={handleGoToExperience} />
      </div>
      <h1 className="experiencia-title">
        <span className="experiencia-subtitle-experiencia">𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖎𝖆</span> 
        <br />
        <span className="experiencia-subtitle-herramientas">𝓨 𝓗𝓮𝓻𝓻𝓪𝓶𝓲𝓮𝓷𝓽𝓪𝓼</span>
      </h1>
      {/* en los iconos a futuro tendra cada herramienta un video de cada herramienta donde explico lo que se */}
      <div className="skills-container">
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">HTML: La Base del Desarrollo Web</h3>
            <p className="skill-text">
              HTML fue mi primer paso en el mundo del desarrollo web. Cuando comencé, apenas entendía cómo funcionaban las etiquetas y la estructura de una página web. Pero con el tiempo y la práctica, empecé a ver cómo estas simples etiquetas podían transformar ideas en realidad digital. Cada línea de código HTML que escribía era como construir un pilar sólido para mi conocimiento. Con el tiempo, esa comprensión básica se convirtió en la base sobre la cual construí todo mi conocimiento en desarrollo web.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">CSS: Estilo y Elegancia en el Desarrollo Web</h3>
            <p className="skill-text">
              CSS fue mi siguiente paso después de dominar HTML. Descubrí que no solo podía crear contenido web, sino que también podía darle vida con estilos y diseños impresionantes. Mis primeros intentos con CSS fueron desafiantes, pero a medida que exploraba sus posibilidades, me di cuenta del poder que tenía para transformar una página web. Cada nueva técnica de diseño que aprendía abría un mundo de creatividad frente a mí, y me emocionaba pensar en las infinitas posibilidades que CSS ofrecía.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">React.js: Construyendo Interfaces Dinámicas y Escalables</h3>
            <p className="skill-text">
              Cuando me adentré en el mundo de React.js, quedé impresionado por su enfoque innovador en la construcción de interfaces de usuario. La idea de componentes reutilizables y el flujo unidireccional de datos simplificaron enormemente mi proceso de desarrollo. Cada proyecto que construí con React.js me permitió explorar nuevas formas de crear experiencias de usuario dinámicas y eficientes. A medida que profundizaba en los conceptos de estado y ciclo de vida, me di cuenta del poder y la flexibilidad que ofrece React.js para construir aplicaciones web modernas y escalables.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
        <div className="skill-item">
          <FaNodeJs className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">Node.js: Potenciando el Desarrollo del Lado del Servidor</h3>
            <p className="skill-text">
              Descubrir Node.js fue un punto de inflexión en mi viaje como desarrollador. Me cautivó su capacidad para utilizar JavaScript tanto en el frontend como en el backend, lo que me permitió construir aplicaciones web de extremo a extremo de manera coherente. A medida que me sumergí más en Node.js, me impresionó su eficiencia y escalabilidad, especialmente en proyectos que requerían una manipulación intensiva de datos en tiempo real. Cada línea de código que escribí en Node.js fue un paso hacia adelante en mi capacidad para crear aplicaciones web robustas y de alto rendimiento.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
        <div className="skill-item">
          <FaGithub className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">GitHub: Colaboración y Control de Versiones</h3>
            <p className="skill-text">
              GitHub se convirtió en mi compañero inseparable desde el principio de mi viaje como desarrollador. Descubrí su poder como plataforma de colaboración y control de versiones, lo que me permitió trabajar de manera efectiva en equipo y mantener un registro organizado de mi trabajo. Cada repositorio en GitHub representaba un proyecto en el que había invertido tiempo y esfuerzo, y cada confirmación era un paso hacia adelante en mi desarrollo como desarrollador de software.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
        <div className="skill-item">
          <FaFileAlt className="skill-icon" />
          <div className="skill-description">
            <h3 className="skill-title">TypeScript: Potenciando la Productividad en el Desarrollo</h3>
            <p className="skill-text">
              Descubrir TypeScript fue un punto de inflexión en mi trayectoria como desarrollador. Al principio, la idea de un lenguaje tipado me parecía intimidante, pero rápidamente me di cuenta de los beneficios que ofrecía en términos de mantenibilidad y escalabilidad del código. A medida que profundizaba en TypeScript, apreciaba cómo sus características avanzadas, como el chequeo estático de tipos, me ayudaban a evitar errores comunes y a escribir código más robusto. Hoy en día, TypeScript es una herramienta indispensable en mi caja de herramientas de desarrollo.
            </p>
            <button className="skill-button">¡Haz clic!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaTecnica;

