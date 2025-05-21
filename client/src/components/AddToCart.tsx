import { useEffect, useState } from 'react';
import { Button } from './ui/Button.tsx';
import { Message } from './ui/Message.tsx';

interface AddToCartProps {
  className?: string;
  onAddToCart: () => void;
}

export const AddToCart = ({ className, onAddToCart }: AddToCartProps) => {
  const [isAdded, setIsAdded] = useState(false);
  function handleAddToCart() {
    onAddToCart();
    setIsAdded(true);
  }

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAdded]);

  return (
    <div className="relative">
      <Button
        bgColor
        className={className ? className : ''}
        onClick={handleAddToCart}
      >
        Adicionar no carrinho
      </Button>
      {isAdded && <Message message="Adicionado!" />}
    </div>
  );
};
