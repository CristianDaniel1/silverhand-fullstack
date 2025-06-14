import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Navigation } from './Navigation.tsx';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import { CloseIcon } from '../icons/CloseIcon.tsx';
import { HamburgerIcon } from '../icons/HamburgerIcon.tsx';
import { CartButton } from '../cart/CartButton.tsx';
import { useCartStore } from '../../store/cartStore.ts';
import { LoggedMenu } from './LoggedMenu.tsx';

const audio = new Audio('./money-for-nothing.mp3');

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isPlaceOrderPage = location.pathname === '/fazer-pedido';

  const isOpen = useCartStore(state => state.isOpen);
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleBar() {
    setIsVisible(prevIsVisible => !prevIsVisible);
  }

  function handleAudio() {
    audio.play();
  }

  return (
    <header
      className={`overflow-x-clip fixed w-full z-50 ${
        isPlaceOrderPage
          ? 'bg-white text-secundary/80 shadow-md'
          : 'bg-secundary text-slate-100'
      }`}
    >
      <div className="flex justify-between gap-4 relative font-semibold tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 padding-x max-container">
        {isHomePage ? (
          <a href="#" className="flex items-center gap-2 h-full pt-[4px]">
            <div className="h-full aspect-video">
              <img
                src={logo}
                height={120}
                width={180}
                alt="Logo Silverhand Store"
                className="object-contain h-full"
              />
            </div>{' '}
          </a>
        ) : (
          <Link to="/" className="flex items-center gap-2 h-full pt-[4px]">
            <div className="h-full aspect-video">
              <img
                src={isPlaceOrderPage ? logoWhite : logo}
                height={120}
                width={180}
                alt="Logo Silverhand Store"
                className="object-contain h-full"
              />
            </div>
          </Link>
        )}
        <div
          className="hidden sm:block text-xl sm:text-2xl font-merry font-medium"
          onClick={handleAudio}
        >
          Let's{' '}
          <span className="text-primary">
            {isPlaceOrderPage ? 'Buy' : 'Rock'}!
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <CartButton isVisible={isVisible} onCloseBar={handleToggleBar} />
          <LoggedMenu />
          {isHomePage && (
            <button
              onClick={handleToggleBar}
              aria-label="abrir e fechar menu"
              className="z-50 flex text-inherit items-center lg:hidden duration-200 hover:text-primary"
            >
              {isVisible ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          )}
        </div>
      </div>
      {!isOpen && isHomePage && (
        <Navigation
          isVisible={isVisible}
          onCloseBar={setIsVisible}
          onToggleBar={handleToggleBar}
        />
      )}
    </header>
  );
};
