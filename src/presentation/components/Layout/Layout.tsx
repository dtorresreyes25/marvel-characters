import { FC } from 'react';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="app">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
