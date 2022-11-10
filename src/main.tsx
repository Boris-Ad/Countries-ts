import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootLayout from './components/RootLayout';
import './index.css';
import CountryPage, { loader as countryPageLoader } from './routes/CountryPage';
import ErrorPage from './routes/ErrorPage';
import HomePage, { loader as homePageLoader } from './routes/HomePage';
import { store } from './redux';
import SelectCountriesPage, { loader as SelectCountriesPageLoader } from './routes/SelectCountriesPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      { path: '/:country', element: <CountryPage />, loader: countryPageLoader },
      { path: '/region/:select', element: <SelectCountriesPage />, loader: SelectCountriesPageLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
