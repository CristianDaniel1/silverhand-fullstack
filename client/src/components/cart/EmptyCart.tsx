import { Link } from 'react-router';
import cartEmpty from '../../assets/emptyCart.png';
import { useAuth } from '../../hooks/queries/useAuth';

interface EmptyCartProps {
  onCloseCart: () => void;
}

export const EmptyCart = ({ onCloseCart }: EmptyCartProps) => {
  const { isError } = useAuth();

  return (
    <div className="padding-y text-center">
      <h3 className="text-2xl font-merry font-medium pb-10">Carrinho vazio!</h3>
      <div className="flex justify-center items-center">
        <img
          src={cartEmpty}
          alt="Carrinho vazio"
          className="object-cover"
          width={100}
          height={100}
        />
      </div>
      {isError && (
        <>
          <p className="pt-10 pb-6 text-balance text-lg">
            Faça seu login para preencher o carrinho
          </p>
          <Link
            to="/login"
            onClick={onCloseCart}
            className="text-primary font-medium duration-200 hover:text-secundary text-lg"
          >
            Fazer login
          </Link>
        </>
      )}
    </div>
  );
};
