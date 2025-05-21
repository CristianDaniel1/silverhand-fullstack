import { MinusIcon } from './icons/MinusIcon.tsx';
import { PlusIcon } from './icons/PlusIcon.tsx';

interface QuantityProps {
  currentQuant: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Quantity = ({
  currentQuant,
  onIncrease,
  onDecrease,
}: QuantityProps) => {
  return (
    <div className="flex justify-start items-center">
      <div className="grid grid-cols-3 gap-3 sm:gap-5 items-center p-2 sm:p-3 text-primary border border-secundary/20 rounded-md">
        <button
          onClick={onDecrease}
          className="hover:text-secundary duration-200"
        >
          <MinusIcon />
        </button>
        <div className="sm:text-lg font-medium text-center">{currentQuant}</div>
        <button
          onClick={onIncrease}
          className="hover:text-secundary duration-200"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
