import { useOrders } from '../../hooks/queries/useOrders';
import { currencyFormatter, dateStringComplete } from '../../utils/formatting';
import { ErrorMessage } from '../ui/ErrorMessage';

const AllOrders = () => {
  const { data, isPending, isError } = useOrders();

  if (isPending) {
    return (
      <div className="py-8 flex justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        title="Ops! Ocorreu um erro"
        message="Ocorreu um erro ao carregar os pedidos"
      />
    );
  }

  return (
    <>
      <h1 className="text-xl w-full py-8 padding-x bg-white font-medium text-secundary/80 text-center">
        Pedidos em Andamento
      </h1>
      <ul className="grid grid-cols-2 gap-4 padding-x">
        {data &&
          data.map(order => (
            <li key={order.id} className="custom-shadow rounded-md">
              <div className="grid text-sm text-secundary/80">
                <div className="grid grid-cols-2 border-b border-b-secundary/10 bg-slate-50 px-5 py-6">
                  <div className="text-base font-medium text-emerald-700">
                    {dateStringComplete(order.orderedAt)}
                  </div>
                  <div className="font-medium flex flex-col items-end">
                    <div className="pb-3 text-primary text-sm">
                      Status Atual
                    </div>
                    <div className="text-base">
                      {order.status === 'PENDING' && 'Em andamento'}
                      {order.status === 'COMPLETED' && 'Concluído'}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3  flex justify-between items-center border-b border-b-secundary/10">
                  <div>
                    {order.items?.length && (
                      <div>Itens ({order.items?.length})</div>
                    )}
                  </div>
                  <div>
                    Valor total:{' '}
                    <span className="font-medium">
                      {currencyFormatter(order.totalPrice)}
                    </span>
                  </div>
                </div>
                <div className="grid gap-3 col-span-full px-5 py-6">
                  {order.items?.map(item => (
                    <div className="grid grid-cols-4 border rounded-md py-2 truncate">
                      <div className="overflow-clip aspect-square h-20 w-full">
                        <img
                          src={item.instrumentImage}
                          alt={item.instrumentName}
                          className="object-contain -translate-y-10 w-full"
                        />
                      </div>
                      <div className="text-sm px-3 overflow-hidden  truncate grid grid-cols-6 col-span-3">
                        <div className="overflow-hidden truncate col-span-5 gap-2 pt-4">
                          {item.instrumentName}
                          <div className="pt-2 text-amber-700">
                            {currencyFormatter(item.priceAtOrder)}
                          </div>
                        </div>
                        <div className="text-end font-medium px-2 py-4">
                          x {item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AllOrders;
