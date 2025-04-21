import React from 'react';

const Logo = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={scrollToTop} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <img src={'/images/logo.png'} alt="Imágen Logo" width="100" height="auto"/>
        </button>
    );
}

export default Logo;

