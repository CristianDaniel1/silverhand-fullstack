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

export type InstrumentCategory = 'CONTRABAIXO' | 'GUITARRA' | 'VIOLAO';

export interface Instrument {
  id: number;
  name: string;
  price: number;
  stringNum: number;
  quant: number;
  category: InstrumentCategory;
  image: string;
}

export interface PaginatedInstruments {
  page: number;
  limit: number;
  total: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  instruments: Instrument[];
}
