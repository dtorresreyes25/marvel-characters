import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/presentation/components/Layout';
import Characters from '@/presentation/pages/Characters';
import CharacterDetail from '@/presentation/pages/CharacterDetail';
import Favorites from '@/presentation/pages/Favorites';

const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route index element={<Characters />} />
          <Route path="character/:id" element={<CharacterDetail />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
