import { createBrowserRouter } from 'react-router-dom';
import DetailsRoute from './routes/Details';
import ErrorPage from './routes/Error';
import MainRoute from './routes/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/details/:name',
    element: <DetailsRoute />,
  },
]);
