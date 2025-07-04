import { OrderItem as OrderItemType } from '../../types';
import { currencyFormatter } from '../../utils/formatting';

export const OrderItem = (item: OrderItemType) => {
  return (
    <li className="py-4 grid grid-cols-2 padding-x border">
      <div>{item.instrumentName}</div>
      <div className="justify-self-end font-medium text-sm text-amber-700">
        {item.quantity} x {currencyFormatter(item.priceAtOrder)}
      </div>
    </li>
  );
};
