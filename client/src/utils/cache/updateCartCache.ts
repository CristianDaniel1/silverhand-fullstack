import { queryClient } from '../../libs/tanstackQuery';
import { CartItem, CartResponse } from '../../types';

export const updateCartItemInCache = (updatedItem: CartItem) => {
  queryClient.setQueryData(['cart'], (oldCart: CartResponse | undefined) => {
    if (!oldCart) return;

    const existingItemIndex = oldCart.items.findIndex(
      item => item.id === updatedItem.id
    );

    let updatedItems;

    if (updatedItem.quantity <= 0) {
      updatedItems = oldCart.items.filter(item => item.id !== updatedItem.id);
    } else if (existingItemIndex !== -1) {
      updatedItems = [...oldCart.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else updatedItems = [...oldCart.items, updatedItem];

    return {
      ...oldCart,
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
    };
  });
};
