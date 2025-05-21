import { Link } from 'react-router';
import { UserIcon } from '../icons/UserIcon.tsx';
import logo from '../../assets/logo.png';
import { CartButton } from '../cart/CartButton.tsx';
import { useState } from 'react';

export const BasicHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleBar() {
    setIsVisible(prevIsVisible => !prevIsVisible);
  }

  return (
    <header className="overflow-x-clip fixed w-full z-50 bg-secundary">
      <div className="flex justify-between gap-4 relative font-semibold tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 px-4 md:px-5 lg:px-10 max-container">
        <Link to="/" className="flex items-center gap-2 h-full pt-[4px]">
          <div className="h-full aspect-video">
            <img
              src={logo}
              height={120}
              width={180}
              alt="Logo Silverhand Store"
              className="object-contain h-full"
            />
          </div>
        </Link>
        <div className="text-white hidden sm:block text-2xl font-merry font-light">
          Let's <span className="text-primary">Rock!</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CartButton isVisible={isVisible} onCloseBar={handleToggleBar} />

          <Link
            to="/login"
            className="flex sm:gap-2 sm:items-center text-slate-100 hover:text-primary duration-200 px-3 py-3"
          >
            <UserIcon />
            <span className="hidden lg:inline-block">Entrar</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
