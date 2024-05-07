import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './LandingPage.css';

interface TooltipProps {
  text: string;
}

const PaginaLanding: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div
        className={`left ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Circle isHovered={isHovered} />
        {isHovered && <Tooltip text="Miguel Angel" />}
      </div>
      <div className="right">
        <Rectangle />
      </div>
    </div>
  );
};

interface CircleProps {
  isHovered: boolean;
}

const Circle: React.FC<CircleProps> = ({ isHovered }) => {
  return <div className={`circle ${isHovered ? 'hovered' : ''}`}>Desarrollador Full Stack</div>;
};

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return <div className="tooltip">{text}</div>;
};

const Rectangle: React.FC = () => {
  return (
    <div className="rectangle">
      <h2>Mi Portafolio</h2>
      <p className="description">
        Con cada línea de código, construyo mi camino hacia el futuro.
        Bienvenido a mi mundo digital.
      </p>
      {/* Utiliza Link en lugar de <a> para navegar */}
      <Link to="/presentacion" className="button">
        Ingresar
      </Link>
    </div>
  );
};

export default PaginaLanding;

  
