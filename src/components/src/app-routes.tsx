import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '@my-app/pages';
import { Layout } from '@my-app/components';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={'/'} element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
