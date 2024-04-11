import React from 'react';
import './Loader.css';
import imgLoad from '../assets/img/Spinner.png';

function Loader({ loading }) {
  return (
    <div className={`loader-container ${loading ? 'loading' : ''}`}>
      <img className="loader" src={imgLoad} alt="loading..." />
    </div>
  );
}

export default Loader;

