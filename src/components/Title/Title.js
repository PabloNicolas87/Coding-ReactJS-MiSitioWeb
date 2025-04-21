import React from 'react';
import './Title.css';

const Title = ({ titulo }) => {
    return (
        <div className="contenedor d-flex justify-content-center align-items-center">
            <h2>{titulo}</h2>
        </div>
    );
}

export default Title;

