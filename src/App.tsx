import AppRoutes from '@/routes';
import '@/styles/theme.css';
import GlobalStyles from '@/styles/global.ts';
import React from 'react';

const App = () => (
  <>
    <GlobalStyles />
    <AppRoutes />
  </>
);

export default App;
