import { create } from 'zustand';

interface Filter {
  category: string;
  selectedStringNum: number | undefined;

  setCategory: (categ: string) => void;
  setStringNum: (stringNum: number) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<Filter>(set => {
  return {
    category: 'todas',
    selectedStringNum: undefined,

    setCategory: categ => set({ category: categ }),
    setStringNum: stringNum => set({ selectedStringNum: stringNum }),
    clearFilters: () => {
      set({ category: 'todas', selectedStringNum: undefined });
    },
  };
});
