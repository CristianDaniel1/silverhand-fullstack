import { create } from 'zustand';
import { type CartItems, Instrument } from '../types';

interface Cart {
  cartItems: CartItems[];
  isOpen: boolean;

  toggleShowCart: () => void;
  hideCart: () => void;
  addToCart: (instrument: Instrument) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<Cart>((set, get) => {
  return {
    cartItems: [],
    isOpen: false,
    toggleShowCart: () => {
      set(state => ({ isOpen: !state.isOpen }));
    },

    hideCart: () => set({ isOpen: false }),
    addToCart: instrument => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];

      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === instrument.id
      );

      if (existingItemIndex > -1) {
        const existingItem = updatedCartItems[existingItemIndex];

        if (existingItem.quantInCart >= existingItem.quant) return;

        const updatedItem = {
          ...existingItem,
          quantInCart: existingItem.quantInCart + 1,
        };

        existingItem.quant = existingItem.quant - 1;

        updatedCartItems[existingItemIndex] = updatedItem;
      } else updatedCartItems.push({ ...instrument, quantInCart: 1 });

      set({ cartItems: updatedCartItems });
    },

    removeItem: id => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];

      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === id
      );

      const existingItem = updatedCartItems[existingItemIndex];

      if (existingItem.quantInCart === 1)
        updatedCartItems.splice(existingItemIndex, 1);
      else {
        const updatedItem = {
          ...existingItem,
          quantInCart: existingItem.quantInCart - 1,
        };

        updatedCartItems[existingItemIndex] = updatedItem;
      }

      existingItem.quant = existingItem.quant + 1;

      set({ cartItems: updatedCartItems });
    },

    clearCart: () => {
      set({ cartItems: [] });
    },
  };
});
