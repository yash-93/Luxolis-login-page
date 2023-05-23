import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginDashboard from './pages/LoginDashboard';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginDashboard />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
