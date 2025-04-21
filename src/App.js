import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [modoOscuro, setModoOscuro] = useState(true);

  const toggleModo = () => {
      setModoOscuro(!modoOscuro);
  };

  return (
    
    <div className={`principal ${modoOscuro ? 'modo-oscuro' : ''}`}>
        
        <BrowserRouter>
        <Header toggleModo={toggleModo} modoOscuro={modoOscuro} />
          <div className='cuerpoPagina'>
            <AboutUs/>
            <MyProjects />
            <Contact />
          </div>
          <Footer /> 
        </BrowserRouter>
        </div>
      );
    }

export default App;
