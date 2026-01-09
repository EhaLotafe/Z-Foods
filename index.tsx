// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// On récupère l'élément racine défini dans index.html
const rootElement = document.getElementById('root');

// Sécurité : on vérifie que l'élément root existe bien pour éviter un crash silencieux
if (!rootElement) {
  throw new Error("Erreur fatale : L'élément 'root' est introuvable. Vérifiez votre fichier index.html.");
}

// Initialisation de React 18
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* L'application Z Foods démarre ici */}
    <App />
  </React.StrictMode>
);