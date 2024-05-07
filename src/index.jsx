import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css'; 
import { App} from './components/App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
  );