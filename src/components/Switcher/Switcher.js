import React from 'react';
import './Switcher.css';

const Switcher = ({ toggleModo, modoOscuro }) => {
  return (
    <div className="switcher-container">
      <label className="switch">
        <input type="checkbox" onChange={toggleModo} checked={modoOscuro} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switcher;
