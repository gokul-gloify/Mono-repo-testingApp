import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Button from "./components/button/Button";
import CustomCard from './components/button/Card/CustomCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { Button, CustomCard };