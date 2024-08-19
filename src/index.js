import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Seu arquivo de estilos

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);