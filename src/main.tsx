import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/global.ts';
import AppRoutes from '@/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </StrictMode>
);
