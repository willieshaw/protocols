import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavigationLinks.css"

function NavigationLinks({ protocols, setActiveRoute, activeRoute }) { // Include activeRoute as a prop
  const navigate = useNavigate();

  const handleMouseEnter = (path) => {
    navigate(path);
    setActiveRoute(path);
  };

  const handleMouseLeave = () => {
    navigate(activeRoute); // Uses the activeRoute prop
  };

  return (
    <div className="navigation-links">
      {protocols.map((protocol, index) => (
        <span
          key={index} className='navigation-link'
          onMouseEnter={() => handleMouseEnter(`/${protocol.title.toLowerCase().replace(/ /g, '-')}`)}
          onMouseLeave={handleMouseLeave}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

export default NavigationLinks;
