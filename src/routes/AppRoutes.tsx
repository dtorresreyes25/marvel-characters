import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout';
import Characters from '@/pages/Characters';
import CharacterDetail from '@/pages/CharacterDetail';
import FavoriteCharacters from '@/pages/FavoriteCharacters/FavoriteCharacters.tsx';

const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route index element={<Characters />} />
          <Route path="character/:id" element={<CharacterDetail />} />
          <Route path="favorites" element={<FavoriteCharacters />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
