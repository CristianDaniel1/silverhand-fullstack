import { type ReactNode } from 'react';

export const CartList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="pt-3 mb-4 flex flex-col gap-6 overflow-y-auto custom-scroll cart-h-calc">
      {children}
    </ul>
  );
};
