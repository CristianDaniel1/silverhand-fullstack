// import { useCartStore } from '../../store/cartStore.ts';
// import { type CartItems } from '../../types.ts';
// import { currencyFormatter } from '../../utils/formatting.ts';
// import { Quantity } from '../QuantityItems.tsx';

// export type Instrument = {
//   id: string;
//   name: string;
//   price: number;
//   stringNum: number;
//   quant: number;
//   image: string;
//   category: 'guitarra' | 'double-bass' | 'acousticGuitar';
// };

// export const CartItem = ({
//   id,
//   name,
//   image,
//   quantInCart,
//   price,
//   ...props
// }: CartItems) => {
//   const addToCart = useCartStore(state => state.addToCart);
//   const removeItem = useCartStore(state => state.removeItem);

//   function handleDecrease() {
//     removeItem(id);
//   }

//   console.log('teste');

//   function handleIncrease() {
//     addToCart({ id, image, name, price, ...props });
//   }

//   return (
//     <li
//       id={id}
//       className="grid grid-cols-3 rounded-lg overflow-clip border-b border-b-secundary/20 pb-6"
//     >
//       <div className="h-full row-span-2 flex items-center justify-center">
//         <img
//           src={image}
//           alt={name}
//           className="aspect-square object-cover w-full"
//         />
//       </div>
//       <h3 className="font-merry font-light tracking-wide mb-3  pt-4 sm:pt-6 text-sm sm:text-base">
//         {name}
//       </h3>
//       <div className="text-primary-light font-semibold pt-6 pr-3 sm:pr-6 ml-auto text-sm sm:text-base">
//         {currencyFormatter.format(price * quantInCart)}
//       </div>
//       <Quantity
//         currentQuant={quantInCart}
//         onDecrease={handleDecrease}
//         onIncrease={handleIncrease}
//       />
//     </li>
//   );
// };
