/**
 * Entry point of the application
 * Renders the App component inside a BrowserRouter component
 * in a strict mode environment
 * @file index.js
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

/**
 * Creates the root element in the DOM
 * and renders the React components tree
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
