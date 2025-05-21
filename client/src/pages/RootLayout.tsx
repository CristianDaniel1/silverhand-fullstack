import { Outlet } from 'react-router';
import { Footer } from '../components/Footer.tsx';
import { ScrollToTop } from '../components/ScrollToTop.tsx';
import { Cart } from '../components/cart/Cart.tsx';

export const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};
