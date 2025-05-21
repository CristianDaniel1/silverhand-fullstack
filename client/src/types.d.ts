export type Instrument = {
  id: string;
  name: string;
  price: number;
  stringNum: number;
  quant: number;
  image: string;
  category: 'guitarra' | 'contrabaixo' | 'violão';
};

export type InstrumentPreview = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type CartItems = {
  quantInCart: number;
} & Instrument;
