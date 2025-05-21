import { type ReactNode } from 'react';

interface MenuListProps {
  children: ReactNode;
}

export const ShopList = ({ children }: MenuListProps) => {
  return (
    <section>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 xs:gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12 pb-20">
        {children}
      </ul>
    </section>
  );
};
