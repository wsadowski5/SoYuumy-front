import { createRoot } from 'react-dom/client';
import React from 'react';

import { App} from './components/App.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );