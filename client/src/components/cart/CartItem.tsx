import { useUpdateCartItem } from '../../hooks/mutations/useUpdateCartItem.ts';
import { CartItemProps } from '../../types';
import { currencyFormatter } from '../../utils/formatting.ts';
import { Quantity } from '../QuantityItems.tsx';

interface CustomItemProps extends CartItemProps {
  mini?: boolean;
}

export const CartItem = ({
  quantity,
  instrument,
  itemTotal,
  id,
  mini = false,
}: CustomItemProps) => {
  const { mutate, isPending } = useUpdateCartItem();

  function handleDecrease() {
    mutate({ id, quantity: -1 });
  }

  function handleIncrease() {
    mutate({ id, quantity: 1 });
  }

  return (
    <li className="grid grid-cols-3 rounded-lg overflow-clip border-b border-b-secundary/20 py-6">
      <div
        className={`flex items-center justify-center ${
          mini ? 'h-[8rem]' : 'h-full row-span-2'
        }`}
      >
        <img
          src={instrument.image}
          alt={instrument.name}
          className="aspect-square object-contain h-full w-full"
        />
      </div>
      <div>
        <h3 className="font-merry font-light tracking-wide mb-3 text-sm sm:text-base line-clamp-2 leading-snug pt-4">
          {instrument.name}
        </h3>
      </div>
      <div className="text-secundary font-semibold pt-4 padding-x text-sm sm:text-base">
        <div className="flex justify-end pb-2">
          {currencyFormatter.format(itemTotal)}
        </div>
        <div className="text-secundary/70 font-normal text-xs flex justify-end">
          {quantity} x {currencyFormatter.format(instrument.price)}
        </div>
      </div>
      {!mini && (
        <Quantity
          isUpdating={isPending}
          currentQuant={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      )}
    </li>
  );
};
