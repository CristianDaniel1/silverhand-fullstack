import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from './pages/RootLayout.tsx';
import { Login } from './pages/Login.tsx';
import { SignUp } from './pages/SignUp.tsx';
import { InstrumentShop } from './pages/InstrumentShop.tsx';
import { InstrumentDetails } from './pages/InstrumentDetails.tsx';
import { Error } from './pages/Error.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/tanstackQuery.ts';
import { Profile } from './pages/Profile.tsx';
import { createAuthLoader, loggedLoader } from './utils/loaders/authLoader.ts';
import { FallbackElement } from './pages/FallbackElement.tsx';
import { Toaster } from 'sonner';
import { instrumentLoader } from './utils/loaders/instrumentLoader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <FallbackElement />,
    children: [
      {
        index: true,
        element: <InstrumentShop />,
      },
      {
        path: 'instrumentos-de-cordas/:instrumentId',
        element: <InstrumentDetails />,
        loader: instrumentLoader,
      },
      {
        path: 'login',
        element: <Login />,
        loader: loggedLoader,
      },
      {
        path: 'cadastro',
        element: <SignUp />,
        loader: loggedLoader,
      },
      {
        path: 'perfil',
        element: <Profile />,
        loader: createAuthLoader(),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
