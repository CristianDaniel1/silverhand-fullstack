import { create } from 'zustand';
import { InstrumentCategory } from '../types';

interface Filter {
  category: InstrumentCategory | null;
  stringNum: number | undefined;

  setCategory: (categ: InstrumentCategory | null) => void;
  setStringNum: (stringNum: number) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<Filter>(set => {
  return {
    category: null,
    stringNum: undefined,

    setCategory: categ => set({ category: categ }),
    setStringNum: stringNum => set({ stringNum }),
    clearFilters: () => {
      set({ category: null, stringNum: undefined });
    },
  };
});
