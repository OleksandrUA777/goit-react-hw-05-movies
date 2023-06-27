import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<BallTriangle />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
