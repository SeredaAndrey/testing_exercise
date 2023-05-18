import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <h2>header</h2>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
