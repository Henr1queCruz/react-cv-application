import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const RotatingIcon = ({ onFormSelected }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    onFormSelected();
  };

  return (
    <FontAwesomeIcon
      className={`cursor-pointer transform transition-transform duration-300 ${
        isRotated ? 'rotate-180' : ''
      }`}
      onClick={handleClick}
      icon={faChevronUp}
    />
  );
};

export default RotatingIcon;
