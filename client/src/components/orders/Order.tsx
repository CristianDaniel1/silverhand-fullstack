import { useState } from 'react';
import { statusObj } from '../../data.ts';
import { Order as OrderType } from '../../types';
import { currencyFormatter, dateFormatter } from '../../utils/formatting.ts';
import { OrderItem } from './OrderItem.tsx';

export const Order = (order: OrderType) => {
  const [isCheckingItems, setIsCheckingItems] = useState(false);

  function handleToggleCheckItem() {
    setIsCheckingItems(prevState => !prevState);
  }

  return (
    <li className="custom-shadow">
      <button
        onClick={handleToggleCheckItem}
        className="grid grid-cols-1 gap-4 xs:grid-cols-2 items-center padding-x py-4 sm:py-6 font-medium text-secundary/80 w-full text-left"
      >
        <div className="grid grid-cols-1 h-full items-center">
          <div className="text-emerald-800">
            {dateFormatter(order.orderedAt)}
          </div>
          <div className="text-lg sm:text-xl">
            Total: <span>{currencyFormatter.format(order.totalPrice)}</span>
          </div>
        </div>
        <div className="xs:justify-self-end bg-white px-4 py-4">
          <div className="text-primary">Status</div>
          <div className="text-secundary/70">{statusObj[order.status]}</div>
        </div>
      </button>
      {isCheckingItems && (
        <ul>
          {order.items.map(item => (
            <OrderItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};
