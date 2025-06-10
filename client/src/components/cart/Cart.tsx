import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/cartStore.ts';
import { currencyFormatter } from '../share/utils/formatting.ts';
import { CloseIcon } from '../icons/CloseIcon.tsx';
import { TrashIcon } from '../icons/TrashIcon.tsx';
import { Button } from '../ui/Button.tsx';
// import { CartItem } from './CartItem.tsx';
import { CartList } from './CartList.tsx';
import { Message } from '../ui/Message.tsx';

export const Cart = () => {
  const [buy, setBuy] = useState(false);

  const isOpen = useCartStore(state => state.isOpen);
  const hideCart = useCartStore(state => state.hideCart);
  const clearCart = useCartStore(state => state.clearCart);
  const cartItems = useCartStore(state => state.cartItems);

  function handleBuyClick() {
    setBuy(true);
  }

  function handleHideCart() {
    hideCart();
  }

  useEffect(() => {
    if (buy) {
      const timer = setTimeout(() => {
        setBuy(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [buy]);

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantInCart * item.price,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className={`${
            !isOpen ? 'hidden hide-backdrop' : 'open-backdrop'
          } absolute cart z-[55] bg-black/60 left-0 w-full min-h-full h-full pb-4 top-0`}
          onClick={hideCart}
        ></div>
      )}
      <div
        className={`${
          !isOpen ? 'hidden hide-cart' : 'open-cart'
        } h-screen cart fixed right-0 top-0 bg-white w-full md:w-[34rem] z-[60] overflow-hidden px-4 md:px-5 lg:px-10`}
      >
        <div className="flex justify-between border-b border-b-secundary/20 py-6">
          <h3 className="font-medium text-xl text-secundary">Meu Carrinho</h3>
          <button
            onClick={handleHideCart}
            className="hover:text-primary flex items-center p-1"
          >
            <CloseIcon />
          </button>
        </div>
        {/* {cartItems.length > 0 ? (
          <>
            <CartList>
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </CartList>
            <div className="relative">
              <div className="flex justify-between items-center pb-4">
                <p className="font-medium tracking-wide text-lg">
                  Total a pagar:{' '}
                  <span className="text-amber-700">
                    {currencyFormatter.format(totalPrice)}
                  </span>
                </p>
                <button
                  className="p-2 border-2 flex items-center gap-2 duration-300 font-semibold rounded text-secundary/60 border-secundary/40 hover:text-secundary hover:border-secundary"
                  onClick={clearCart}
                >
                  <TrashIcon /> Excluir
                </button>
              </div>
              <Button bgColor className="block w-full" onClick={handleBuyClick}>
                Realizar Pedido!
              </Button>
              {buy && <Message message="É necessário estar logado!" />}
            </div>
          </>
        ) : (
          <div className="flex flex-col py-10 padding-x text-center text-secundary">
            <h3 className="font-merry text-2xl py-6">O carrinho está vazio!</h3>
          </div>
        )} */}
      </div>
    </>
  );
};
