// src/index.js
import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter as Router } from 'react-router-dom';  // BrowserRouter here
import './index.css';
import App from './App.jsx';

// Wrap App with BrowserRouter for routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
 
      <App />
    
  </StrictMode>
);
