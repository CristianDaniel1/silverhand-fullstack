import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from './pages/RootLayout.tsx';
import { Login } from './pages/Login.tsx';
import { SignUp } from './pages/SignUp.tsx';
import { InstrumentShop } from './pages/InstrumentShop.tsx';
import { InstrumentDetails } from './pages/InstrumentDetails.tsx';
import { Error } from './pages/Error.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/tanstackQuery.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <InstrumentShop />,
      },
      {
        path: 'instrumentos-de-cordas/:instrumentId',
        element: <InstrumentDetails />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'cadastro',
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
