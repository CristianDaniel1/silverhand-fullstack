import { CloseIcon } from '../icons/CloseIcon.tsx';

interface CartHeaderProps {
  totalItems: number;
  onCloseCart: () => void;
}

export const CartHeader = ({ totalItems, onCloseCart }: CartHeaderProps) => (
  <div className="flex justify-between border-b border-b-secundary/20 py-6">
    <div className="flex items-center gap-3 font-medium text-xl text-secundary">
      <h3>Meu Carrinho</h3>
      {totalItems > 0 && (
        <div className="text-secundary/70">({totalItems})</div>
      )}
    </div>
    <button
      onClick={onCloseCart}
      className="hover:text-primary flex items-center p-1"
    >
      <CloseIcon />
    </button>
  </div>
);
