import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/cartStore.ts';
import { currencyFormatter } from '../../utils/formatting.ts';
import { TrashIcon } from '../icons/TrashIcon.tsx';
import { Button } from '../ui/Button.tsx';
import { CartList } from './CartList.tsx';
import { Message } from '../ui/Message.tsx';
import { useCart } from '../../hooks/queries/useCart.ts';
import { CartItem } from './CartItem.tsx';
import { enhanceCart } from '../../utils/priceCalculator.ts';
import { Backdrop } from './Backdrop.tsx';
import { CartHeader } from './CartHeader.tsx';
import { EmptyCart } from './EmptyCart.tsx';
import { useDeleteCart } from '../../hooks/mutations/useDeleteCart.ts';
import { Spinner } from '../ui/Spinner.tsx';

export const Cart = () => {
  const [buy, setBuy] = useState(false);

  const isOpen = useCartStore(state => state.isOpen);
  const hideCart = useCartStore(state => state.hideCart);
  const { data } = useCart();
  const { mutate, isPending } = useDeleteCart();

  function handleBuyClick() {
    setBuy(true);
  }

  function handleClearCart() {
    mutate();
  }

  useEffect(() => {
    if (buy) {
      const timer = setTimeout(() => {
        setBuy(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [buy]);

  let newData;
  if (data && data.items?.length) {
    newData = enhanceCart(data);
  }

  return (
    <>
      <Backdrop onHideBackdrop={hideCart} isOpen={isOpen} />
      <section
        className={`${
          !isOpen ? 'hidden hide-cart' : 'open-cart'
        } h-screen cart fixed right-0 top-0 bg-white w-full md:w-[34rem] z-[60] overflow-hidden px-4 md:px-5 lg:px-10`}
      >
        <CartHeader
          totalItems={newData?.totalItems || 0}
          onCloseCart={hideCart}
        />
        {newData?.items && newData.items?.length > 0 && (
          <>
            <CartList>
              {newData.items.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
              {isPending && (
                <div className="py-8 flex justify-center">
                  <Spinner className="size-8 text-secundary" />
                </div>
              )}
            </CartList>
            <div className="relative">
              <div className="flex justify-between items-center pb-4">
                <p className="font-medium tracking-wide text-lg">
                  Total a pagar:{' '}
                  <span className="text-amber-700">
                    {currencyFormatter.format(newData.total)}
                  </span>
                </p>
                <button
                  className="p-2 border-2 flex items-center gap-2 duration-300 font-semibold rounded text-secundary/60 border-secundary/40 hover:text-secundary hover:border-secundary"
                  onClick={handleClearCart}
                  disabled={isPending}
                >
                  <TrashIcon /> {isPending ? 'Excluindo...' : 'Excluir'}
                </button>
              </div>
              <Button
                bgColor
                disabled={isPending}
                className="block w-full"
                onClick={handleBuyClick}
              >
                Realizar Pedido!
              </Button>
              {buy && <Message message="É necessário estar logado!" />}
            </div>
          </>
        )}
        <EmptyCart onCloseCart={hideCart} />
      </section>
    </>
  );
};
