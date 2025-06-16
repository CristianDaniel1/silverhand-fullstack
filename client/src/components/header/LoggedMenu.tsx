import { Link } from 'react-router';
import { UserIcon } from '../icons/UserIcon.tsx';
import { useAuth } from '../../hooks/queries/useAuth.ts';
import { UserCircleIcon } from '../icons/UserCircleIcon.tsx';
import { firstNameFormat } from '../../utils/stringFormatters.ts';
import { SignOutIcon } from '../icons/SignOutIcon.tsx';
import { HomeIcon } from '../icons/HomeIcon.tsx';
import { LockOpenIcon } from '../icons/LockOpenIcon.tsx';
import { useLogout } from '../../hooks/mutations/useLogout.ts';
import { Spinner } from '../ui/Spinner.tsx';

export const LoggedMenu = () => {
  const { userAuth, isError, isPending } = useAuth();
  const { mutate, isPending: IsLogginOut } = useLogout();

  function handleLogout() {
    mutate();
  }

  const name = !isPending && userAuth && firstNameFormat(userAuth.name);

  if (isError || isPending)
    return (
      <Link
        to="/login"
        aria-label="ir para o login"
        className="flex sm:gap-2 sm:items-center hover:text-primary duration-200 px-3 py-3"
      >
        <UserIcon />
        <span className="hidden lg:inline-block">Entrar</span>
      </Link>
    );
  else
    return (
      <div className="menu relative z-40 lg:z-50">
        <button className="flex items-center justify-center hover:text-primary duration-200 rounded-full gap-2">
          {userAuth?.profilePic ? (
            <div className="size-8 rounded-full">
              <img
                src={userAuth.profilePic}
                alt="Foto de perfil"
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          ) : (
            <UserCircleIcon className="object-cover size-8" />
          )}
          <span className="hidden sm:inline-block">
            {name && name.length > 15 ? '' : name}
          </span>
        </button>
        <ul className="menu-list text-secundary/90 w-[12rem] duration-300 pt-4 bg-inherit absolute bottom-0 translate-y-full right-0 sm:right-0 z-10 shadow-lg font-normal grid grid-cols-1 text-left">
          {!isPending && userAuth && userAuth.role === 'ADMIN_ROLE' && (
            <li>
              <Link
                to="/admin"
                className="duration-200 bg-white hover:bg-neutral-200 h-full w-full py-3 px-4 border-b border-b-secundary/10 active:text-primary active:bg-white flex items-center gap-2"
              >
                <LockOpenIcon /> Admin
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/perfil"
              className="duration-200 bg-white hover:bg-neutral-200 h-full w-full py-3 px-4 border-b border-b-secundary/10 active:text-primary active:bg-white flex items-center gap-2"
            >
              <UserIcon /> Meu perfil
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="duration-200 bg-white hover:bg-neutral-200 h-full w-full py-3 px-4 border-b border-b-secundary/10 active:text-primary active:bg-white flex items-center gap-2"
            >
              <HomeIcon /> Página inicial
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="duration-200 bg-white hover:bg-neutral-200 h-full w-full py-3 px-4 border-b border-b-secundary/10 active:text-primary active:bg-white text-left flex items-center gap-2"
            >
              {IsLogginOut ? <Spinner className="size-6" /> : <SignOutIcon />}{' '}
              Sair
            </button>
          </li>
        </ul>
      </div>
    );
};
