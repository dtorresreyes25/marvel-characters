import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
