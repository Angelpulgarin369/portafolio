// Presentacion.jsx
import React, { useState } from 'react';
import { BsArrowUpCircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; 
import './Presentacion.css';

const Presentacion = () => {
  const navigate = useNavigate(); 

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  // Funcionalidad de los iconos
  const goToInicio = () => {
    // Redireccionar al componente de LandingPage
    navigate('/');
  };

  const goToProyectos = () => {
    // Redireccionar al componente de Proyectos
    navigate('/proyectos');
  };

  const goBack = () => {
    // Retroceder al componente anterior, en este caso LandingPage
    navigate(-1);
  };

  return (
    <div className="presentacion">
      <div className="icon-container">
        {/* Añadir funcionalidad a los iconos */}
        <BsArrowUpCircleFill onClick={goToInicio} className="icon up-arrow" />
        <BsArrowLeftCircleFill onClick={goBack} className="icon left-arrow" />
        <BsArrowRightCircleFill onClick={goToProyectos} className="icon right-arrow" />
      </div>
      <div className="banner-container">
        <div className={`banner banner-texto1 ${isFlipped1 ? 'flipped' : ''}`} onClick={handleFlip1}>
          <h1 className="bounce">Descubre Mi Pasión por el Desarrollo Front End</h1>
        </div>
      </div>
      <div className="texto-container">
        <div className={`banner banner-texto2 ${isFlipped2 ? 'flipped' : ''}`} onClick={handleFlip2}>
          <div className="texto-presentacion type-animation">
            <p>
              Hola y bienvenido/a a mi mundo digital! Soy Miguel Angel 👨‍💻, un apasionado del desarrollo front end con un enfoque creativo y orientado a resultados. Mi viaje en el mundo del desarrollo web comenzó con una fascinación por la capacidad de dar vida a ideas a través del código. 💡 Con una sólida base en tecnologías como HTML, CSS y JavaScript, Node, React entre otras, mi objetivo es crear experiencias digitales impactantes que no solo sean visualmente atractivas, sino también intuitivas y funcionales. Me encanta enfrentar desafíos y encontrar soluciones innovadoras para problemas complejos. 💪 Además de mi experiencia técnica, soy un firme creyente en la importancia de la colaboración y el trabajo en equipo. Disfruto colaborar con diseñadores, desarrolladores y otras partes interesadas para llevar los proyectos al siguiente nivel. 🤝 En este portafolio, encontrarás una muestra de mi trabajo, desde proyectos personales hasta colaboraciones profesionales. Cada proyecto refleja mi dedicación a la excelencia y mi pasión por el desarrollo front end. 🎨 Gracias por tomarte el tiempo de visitar mi portafolio. Espero que disfrutes explorando mi trabajo tanto como yo disfruté creándolo. ¡Vamos a sumergirnos en el mundo del desarrollo web juntos! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;









  