import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MainLayout />
    </HashRouter>
  </StrictMode>
);
