import { useCartStore } from '../../store/cartStore';
import { CartIcon } from '../icons/CartIcon.tsx';

interface CartButtonProps {
  isVisible: boolean;
  onCloseBar: (visible: boolean) => void;
}

export const CartButton = ({ isVisible, onCloseBar }: CartButtonProps) => {
  const toggleShowCart = useCartStore(state => state.toggleShowCart);
  const cartItems = useCartStore(state => state.cartItems);

  const totalItems = cartItems.reduce(
    (totalNumItems, item) => totalNumItems + item.quantInCart,
    0
  );

  function handleToggleCart() {
    toggleShowCart();

    if (isVisible) onCloseBar(false);
  }

  return (
    <button
      className="flex gap-2 items-center text-slate-100 hover:text-primary duration-200 relative"
      aria-label="abrir carrinho de compras"
      onClick={handleToggleCart}
    >
      <CartIcon />
      <span className="hidden lg:block tracking-wider font-semibold">
        Carrinho
      </span>
      {totalItems ? (
        <span className="border-2 bg-primary size-6 border-neutral-900 text-neutral-900 rounded-full absolute -bottom-1/2 -left-2 text-sm flex justify-center font-bold items-center">
          {totalItems}
        </span>
      ) : (
        ''
      )}
    </button>
  );
};
