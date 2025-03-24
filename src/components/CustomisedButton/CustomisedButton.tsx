import React, { useState } from 'react';
import './CustomisedButton.css';

interface CustomisedButtonProps {
  link?: string;
  img?: string;
  label?: string;
}

const CustomisedButton: React.FC<CustomisedButtonProps> = ({
  link,
  label,
  img,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const openBlog = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      className={`custom-button ${isHovered ? 'hovered' : ''}`}
      onClick={openBlog}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <img
        src={img}
        alt='read blog'
        className={isHovered ? 'hovered-img' : ''}
      />
    </button>
  );
};

export default CustomisedButton;
