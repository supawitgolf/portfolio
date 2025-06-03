import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';           // base styles
import './styles.css';          // your custom section + dark mode styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);