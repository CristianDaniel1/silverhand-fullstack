import logoWhite from '../../assets/logo-white.png';
import { Link } from 'react-router';
import { HomeIcon } from '../icons/HomeIcon';
import { UserCircleIcon } from '../icons/UserCircleIcon';
import { SignOutIcon } from '../icons/SignOutIcon';
import { useLogout } from '../../hooks/mutations/useLogout';

export const AdminHeader = () => {
  const { mutate } = useLogout();

  function handleLogout() {
    mutate();
  }

  return (
    <header className="overflow-x-clip fixed w-full z-50 bg-white text-secundary/80 shadow-md">
      <div className="flex justify-between gap-4 relative tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 padding-x max-container font-medium">
        <Link to="/" className="flex items-center gap-2 h-full pt-[4px]">
          <div className="h-full aspect-video">
            <img
              src={logoWhite}
              height={120}
              width={180}
              alt="Logo Silverhand Store"
              className="object-contain h-full"
            />
          </div>
        </Link>

        <div className="text-2xl font-merry">
          Painel de <span className="text-primary">Administrador</span>
        </div>
        <ul className="flex justify-center gap-4 items-center">
          <li>
            <Link to="/">
              <HomeIcon className="size-8 hover:text-primary duration-200" />
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              <UserCircleIcon className="size-8 hover:text-primary duration-200" />
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="px-8 border-2 py-2 rounded bg-primary border-transparent text-secundary sm:hover:bg-white sm:hover:text-primary sm:hover:border-primary sm:active:text-secundary sm:active:bg-primary active:text-primary active:bg-white active:border-primary font-bold tracking-wider duration-200 z-[1] flex justify-center items-center gap-2"
            >
              <SignOutIcon />
              Sair
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
