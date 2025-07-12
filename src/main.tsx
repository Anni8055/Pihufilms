import { createRoot } from 'react-dom/client';
import { StrictMode, lazy, Suspense } from 'react';
import App from './App.tsx';
import './index.css';

// Add performance optimization
const root = createRoot(document.getElementById("root")!);

// Add event listener for content loaded to improve perceived performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
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
