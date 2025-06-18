import { MinusIcon } from './icons/MinusIcon.tsx';
import { PlusIcon } from './icons/PlusIcon.tsx';
import { Spinner } from './ui/Spinner.tsx';

interface QuantityProps {
  isUpdating: boolean;
  currentQuant: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Quantity = ({
  isUpdating,
  currentQuant,
  onIncrease,
  onDecrease,
}: QuantityProps) => {
  return (
    <div className="flex justify-start items-center">
      <div className="grid grid-cols-3 gap-3 sm:gap-5 items-center p-2 text-primary border border-secundary/20 rounded-md">
        <button
          onClick={onDecrease}
          disabled={isUpdating}
          className="hover:text-secundary duration-200"
        >
          <MinusIcon />
        </button>
        <div className="font-medium text-center">
          {isUpdating ? (
            <div className="flex justify-center">
              <Spinner className="size-4" />
            </div>
          ) : (
            currentQuant
          )}
        </div>
        <button
          onClick={onIncrease}
          disabled={isUpdating}
          className="hover:text-secundary duration-200"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
