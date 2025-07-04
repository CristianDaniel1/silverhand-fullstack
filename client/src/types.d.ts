export type InstrumentPreview = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type InstrumentCategory = 'contrabaixo' | 'guitarra' | 'violao';

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
  zipCode: string;
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

export type UserRegister = {
  name: string;
  email: string;
  cpf: string;
  zipCode: string;
  address: string;
  role?: Role | 'USER_ROLE' | 'ADMIN_ROLE';
  phoneNumber?: string;
  profilePic?: string;
};

export interface CartItem {
  id: number;
  cartId: number;
  quantity: number;
  instrumentId: number;
  instrument: Instrument;
}

export interface ShoppingCart {
  id: number;
  userId: string;
  items: CartItem[];
  totalItems?: number;
  subtotal?: number;
}

export type CartResponse = ShoppingCart;

export interface EnhancedShoppingCart extends Omit<ShoppingCart, 'items'> {
  items: (CartItem & {
    itemTotal: number;
  })[];
  totalItems: number;
  total: number;
}

export type CartItemProps = CartItem & { itemTotal: number };
