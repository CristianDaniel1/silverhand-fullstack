import { lazy, Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/RootLayout.tsx';
import InstrumentShop from './pages/InstrumentShop.tsx';
import ErrorElement from './pages/Error.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/tanstackQuery.ts';
import { createAuthLoader, loggedLoader } from './utils/loaders/authLoader.ts';
import FallbackElement from './pages/FallbackElement.tsx';
import { Toaster } from 'sonner';
import { instrumentLoader } from './utils/loaders/instrumentLoader.ts';
import { Spinner } from './components/ui/Spinner.tsx';

// const InstrumentShop = lazy(() => import('./pages/InstrumentShop'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const InstrumentDetails = lazy(() => import('./pages/InstrumentDetails'));
const Profile = lazy(() => import('./pages/Profile'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const LayoutAdmin = lazy(() => import('./pages/LayoutAdmin'));
const AllOrders = lazy(() => import('./components/admin/AllOrders.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    hydrateFallbackElement: <FallbackElement />,
    children: [
      {
        index: true,
        element: <InstrumentShop />,
      },
      {
        path: 'instrumentos-de-cordas/:instrumentId',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <InstrumentDetails />
          </Suspense>
        ),
        loader: instrumentLoader,
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <Login />
          </Suspense>
        ),
        loader: loggedLoader,
      },
      {
        path: 'esqueci-minha-senha',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: 'reset-senha',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <ResetPassword />
          </Suspense>
        ),
      },
      {
        path: 'cadastro',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <SignUp />
          </Suspense>
        ),
        loader: loggedLoader,
      },
      {
        path: 'perfil',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <Profile />
          </Suspense>
        ),
        loader: createAuthLoader(),
      },
      {
        path: 'fazer-pedido',
        element: (
          <Suspense fallback={<FallbackElement />}>
            <PlaceOrder />
          </Suspense>
        ),
        loader: createAuthLoader(),
      },
    ],
  },
  {
    path: '/admin',
    errorElement: <ErrorElement />,
    hydrateFallbackElement: <FallbackElement />,
    element: (
      <Suspense fallback={<FallbackElement />}>
        <LayoutAdmin />
      </Suspense>
    ),
    loader: createAuthLoader(['ADMIN_ROLE']),
    children: [
      {
        path: 'pedidos',
        element: (
          <Suspense fallback={<Spinner className="size-6" />}>
            <AllOrders />
          </Suspense>
        ),
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
