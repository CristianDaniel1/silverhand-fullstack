import { type ReactNode } from 'react';

export const CartList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mb-4 flex flex-col overflow-y-auto custom-scroll cart-h-calc">
      {children}
    </ul>
  );
};
