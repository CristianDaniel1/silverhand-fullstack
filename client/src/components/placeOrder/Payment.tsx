import { useState } from 'react';
import { CreditCardIcon } from '../icons/CreditCardIcon.tsx';
import { PixIcon } from '../icons/PixIcon.tsx';
import { PrayingIcon } from '../icons/PrayingIcon.tsx';
import { Button } from '../ui/Button.tsx';
import { LockIcon } from '../icons/LockIcon.tsx';

export type PaymentMethods = 'Pix' | 'Cartão' | 'Deus' | null;

const classes =
  'flex items-center justify-center gap-2 px-3 py-2 duration-200 rounded-md w-full h-full border-2';

interface PaymentProps {
  onPlaceOrder: () => void;
}

export const Payment = ({ onPlaceOrder }: PaymentProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>(null);

  function handleClick(method: PaymentMethods) {
    setPaymentMethod(method);
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-secundary/80 pb-5">
        Formas de Pagamento
      </h3>
      <ul className="grid grid-cols-3 gap-3 text-secundary/80 font-medium pb-6">
        <li className="flex justify-center w-full h-full">
          <button
            onClick={() => handleClick('Pix')}
            className={`${classes} ${
              paymentMethod === 'Pix'
                ? 'bg-slate-200 border-slate-600 text-slate-600'
                : 'border-secundary/20 hover:text-slate-700 hover:border-slate-700 active:text-slate-700'
            }`}
          >
            <PixIcon /> Pix
          </button>
        </li>
        <li className="flex justify-center w-full h-full">
          <button
            onClick={() => handleClick('Cartão')}
            className={`${classes} ${
              paymentMethod === 'Cartão'
                ? 'bg-slate-200 border-slate-600 text-slate-600'
                : 'border-secundary/20 hover:text-slate-700 hover:border-slate-700 active:text-slate-700'
            }`}
          >
            <CreditCardIcon /> Cartão
          </button>
        </li>
        <li className="flex justify-center w-full h-full">
          <button
            onClick={() => handleClick('Deus')}
            className={`${classes} ${
              paymentMethod === 'Deus'
                ? 'bg-slate-200 border-slate-600 text-slate-600'
                : 'border-secundary/20 hover:text-slate-700 hover:border-slate-700 active:text-slate-700'
            }`}
          >
            <PrayingIcon /> Deus
          </button>
        </li>
      </ul>
      <Button
        bgColor
        disabled={!paymentMethod}
        onClick={onPlaceOrder}
        className="w-full disabled:bg-slate-300 disabled:hover:bg-slate-400 disabled:hover:border-slate-700 disabled:hover:text-secundary flex justify-center items-center gap-3"
      >
        {!paymentMethod && <LockIcon />} Confirmar Pedido
      </Button>
    </div>
  );
};
