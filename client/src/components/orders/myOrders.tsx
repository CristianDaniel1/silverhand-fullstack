import { useMyOrders } from '../../hooks/queries/useMyOrders.ts';
import { ErrorMessage } from '../ui/ErrorMessage.tsx';
import { Spinner } from '../ui/Spinner.tsx';
import { Order } from './Order.tsx';

interface MyOrdersProps {
  userId: string;
}

export const MyOrders = ({ userId }: MyOrdersProps) => {
  const {
    data: orders,
    isPending,
    isError,
    error,
  } = useMyOrders({ id: userId });

  return (
    <div>
      <h3 className="font-merry text-xl pb-6">Histórico de Pedidos</h3>
      {isPending && (
        <div className="py-8 flex justify-center">
          <Spinner className="size-12 text-primary" />
        </div>
      )}
      {orders && orders.length > 0 && (
        <ul className="grid grid-cols-1 gap-5">
          {orders.map(order => (
            <Order key={order.id} {...order} />
          ))}
        </ul>
      )}
      {orders && !orders.length && (
        <p className="pt-2">Sem pedidos até o momento.</p>
      )}
      {isError && (
        <ErrorMessage
          title="Erro ao carregar pedidos"
          message={error!.message || 'Ocorreu um erro inesperado'}
        />
      )}
    </div>
  );
};
