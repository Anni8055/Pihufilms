import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create and render the root
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <App />
  );
}

// Add preconnect hints for external resources
const addPreconnect = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  document.head.appendChild(link);
};

// Preconnect to important domains
addPreconnect('https://images.unsplash.com');
addPreconnect('https://fonts.googleapis.com');
addPreconnect('https://fonts.gstatic.com');
