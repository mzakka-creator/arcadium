import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Console easter egg
console.log('%c🕹️ ARCADIUM 🕹️', 'font-size: 50px; color: #FF006E; text-shadow: 0 0 10px #FF006E;');
console.log('%cLevel Up Your Event with Arcade Entertainment!', 'font-size: 16px; color: #00F0FF;');
console.log('%cLooking for a developer? Contact us!', 'font-size: 14px; color: #8B00FF;');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log('🎮 Arcadium website loaded successfully!');
