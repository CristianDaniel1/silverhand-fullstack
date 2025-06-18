import { NavLink } from 'react-router';
import { GuitarIcon } from '../icons/GuitarIcon';
import { PackageIcon } from '../icons/PackageIcon';
import { UserIcon } from '../icons/UserIcon';
import { PlusIcon } from '../icons/PlusIcon';

export const Sidebar = () => {
  return (
    <div className="border-r h-full">
      <ul className="grid font-medium text-sm">
        <li>
          <NavLink
            to="pedidos"
            className={({ isActive }) =>
              `px-6 py-5 tracking-wide  ${
                isActive
                  ? 'bg-primary/90 border-b-transparent'
                  : 'border-b hover:bg-slate-100'
              } flex gap-2 items-center w-full duration-300 text-secundary/80`
            }
          >
            <PackageIcon />
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="usuarios"
            className={({ isActive }) =>
              `px-6 py-5 tracking-wide  ${
                isActive
                  ? 'bg-primary/90 border-b-transparent'
                  : 'border-b hover:bg-slate-100'
              } flex gap-2 items-center w-full duration-300 text-secundary/80`
            }
          >
            <UserIcon />
            Usuários
          </NavLink>
        </li>
        <li>
          <NavLink
            to="instrumentos"
            className={({ isActive }) =>
              `px-6 py-5 tracking-wide  ${
                isActive
                  ? 'bg-primary/90 border-b-transparent'
                  : 'border-b hover:bg-slate-100'
              } flex gap-2 items-center w-full duration-300 text-secundary/80`
            }
          >
            <GuitarIcon />
            Instrumentos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="instrumentos"
            className={({ isActive }) =>
              `px-6 py-5 tracking-wide  ${
                isActive
                  ? 'bg-primary/90 border-b-transparent'
                  : 'border-b hover:bg-slate-100'
              } flex gap-2 items-center w-full duration-300 text-secundary/80`
            }
          >
            <PlusIcon />
            Novos instrumentos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="instrumentos"
            className={({ isActive }) =>
              `px-6 py-5 tracking-wide  ${
                isActive
                  ? 'bg-primary/90 border-b-transparent'
                  : 'border-b hover:bg-slate-100'
              } flex gap-2 items-center w-full duration-300 text-secundary/80`
            }
          >
            <PlusIcon />
            Novos usuários
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
