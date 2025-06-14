import { Outlet } from 'react-router';
import { Footer } from '../components/Footer.tsx';
import { ScrollToTop } from '../components/ScrollToTop.tsx';
import { Cart } from '../components/cart/Cart.tsx';
import { Header } from '../components/header/Header.tsx';

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Cart />
      <div className=""></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
