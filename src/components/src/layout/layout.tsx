import { Outlet } from 'react-router-dom';
import { Header } from '@my-app/components';
import './layout.css';

export function Layout() {
  return (
    <>
      <Header />
      <main
        className={'flex justify-center items-center w-full max-w-[1200px] h-screen m-auto p-4'}>
        <Outlet />
      </main>
    </>
  );
}
