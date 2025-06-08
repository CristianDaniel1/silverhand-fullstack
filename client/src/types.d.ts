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

export interface BodyLogin {
  email: string;
  password: string;
}

enum Role {
  ADMIN = 'ADMIN_ROLE',
  USER = 'USER_ROLE',
}

export type UserAuth = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  zipCode: number;
  address: string;
  role: Role;
  createdAt: Date | string;
  updatedAt: Date | string;
  phoneNumber?: string;
  profilePic?: string;
};

export enum OrderStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  RETURNED = 'RETURNED',
}

export interface OrderItem {
  id: number;
  orderId: string;
  instrumentId: number;
  quantity: number;
  priceAtOrder: number;
  instrumentName?: string;
  instrumentImage?: string;
  instrumentDetails?: Instrument;
}

export interface Order {
  id: string;
  userId: string;
  cartId: number;
  totalPrice: number;
  orderedAt: Date | string;
  status: OrderStatus;
  items: OrderItem[];
}

export type OrdersResponse = Order[];

export interface SignalType {
  signal: AbortSignal;
}
