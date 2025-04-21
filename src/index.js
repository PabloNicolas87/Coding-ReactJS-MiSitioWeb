import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_por from "./translations/por/global.json";

i18next.init({
  iterpolation: {escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    por: {
      global: global_por
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
      <App />  
    </I18nextProvider>
  </React.StrictMode>
);
reportWebVitals();
