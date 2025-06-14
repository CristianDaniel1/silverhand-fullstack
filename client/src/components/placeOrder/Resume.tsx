import { currencyFormatter } from '../../utils/formatting';
import {
  calculateDescount,
  calculateOriginalPrice,
} from '../../utils/priceCalculator';

interface ResumeProps {
  total: number;
}

export const Resume = ({ total }: ResumeProps) => {
  const originalFakePrice = calculateOriginalPrice(total);

  return (
    <div className="text-end grid gap-3 py-4 px-2 border-y-2">
      <div className="flex justify-between">
        <div className="font-medium">Subtotal</div>
        <div>{originalFakePrice}</div>
      </div>
      <div className="flex justify-between">
        <div className="font-medium text-emerald-600">Desconto (10%)</div>
        <div className="text-emerald-600 font-medium">
          - {calculateDescount(total / (1 - 10 / 100))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-medium text-emerald-600">Frete</div>
        <div className="text-emerald-600 font-medium">
          <span className="line-through">- R$</span> Grátis
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-medium">Total</div>
        <div className="font-semibold">{currencyFormatter(total)}</div>
      </div>
    </div>
  );
};
