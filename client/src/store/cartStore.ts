import { create } from 'zustand';

interface Cart {
  isOpen: boolean;

  toggleShowCart: () => void;
  hideCart: () => void;
}

export const useCartStore = create<Cart>(set => {
  return {
    isOpen: false,
    toggleShowCart: () => {
      set(state => ({ isOpen: !state.isOpen }));
    },
    hideCart: () => set({ isOpen: false }),
  };
});
