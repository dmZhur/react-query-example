import { Link, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <header>
        <nav className="container flex justify-between p-4 mx-auto lg:w-screen-lg">
          <Link className="w-full" to="/">
            <img src="/react.svg" alt="React Query" width="40" />
          </Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
