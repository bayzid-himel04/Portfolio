// ToggleButton.js
import React from 'react';

const ToggleButton = ({ setopen }) => {
  const handleToggle = () => {
    setopen((prevOpen) => !prevOpen);
  };

  return (
    <button onClick={handleToggle} className="toggle-button">
      button
    </button>
  );
};

export default ToggleButton;
