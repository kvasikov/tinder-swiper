import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';
import { StartPage } from '../pages/StartPage';

export const URL_DATA = {
  init: {
    path: '/tinder-swiper',
  },
  notFound: {
    path: '*',
  },
};

const Layout = () => (
  <>
    <Outlet />
  </>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={URL_DATA.init.path} element={<Layout />}>
      <Route index element={<StartPage />} />
      <Route path={URL_DATA.notFound.path} element={<div>Page not found</div>} />
    </Route>,
  ),
);
