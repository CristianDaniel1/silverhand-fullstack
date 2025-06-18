import { CartItem } from '../components/cart/CartItem.tsx';
import { DestinationInfo } from '../components/placeOrder/DestinationInfo.tsx';
import { Payment } from '../components/placeOrder/Payment.tsx';
import { Resume } from '../components/placeOrder/Resume.tsx';
import { ErrorMessage } from '../components/ui/ErrorMessage.tsx';
import { Spinner } from '../components/ui/Spinner.tsx';
import { useCreateOrder } from '../hooks/mutations/useCreateOrder.ts';
import { useAuth } from '../hooks/queries/useAuth.ts';
import { useCart } from '../hooks/queries/useCart.ts';
import { enhanceCart } from '../utils/priceCalculator.ts';
import { firstNameFormat } from '../utils/stringFormatters.ts';

const PlaceOrder = () => {
  const { mutate, isPending: isLoadingPay, isSuccess } = useCreateOrder();
  const { userAuth, isError: isErrorAuth } = useAuth();
  const { data, isPending: IsLoadingCart, isError: isErrorCart } = useCart();

  let newData;
  if (data && data.items?.length) {
    newData = enhanceCart(data);
  }

  function handleConfirmOrder() {
    mutate();
  }

  if (!isSuccess && (isErrorCart || !data?.items?.length)) {
    return (
      <main className="pt-8 sm:pt-12 bg-slate-50">
        <div className="padding-y flex justify-center gap-14 max-container-3 lg:max-container-2 min-h-screen padding-x bg-white">
          <div>
            <ErrorMessage
              title={`Carrinho vazio, ${firstNameFormat(
                userAuth?.name || ''
              )}!`}
              message="Não é possível continuar com o pagamento sem instrumentos"
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-8 sm:pt-12 bg-slate-50">
      <div className="padding-y grid grid-cols-1 lg:grid-cols-5 gap-14 max-container-3 lg:max-container-2 min-h-screen padding-x bg-white">
        <div className="lg:col-span-3 order-3 lg:order-1">
          <section className="border-b border-b-secundary/20 pb-10">
            <h1 className="font-merry text-xl pb-6 border-b-2 border-b-secundary/10 text-secundary/80">
              Finalizar compra
            </h1>
            {userAuth && (
              <div className="pt-4">
                <DestinationInfo
                  name={userAuth.name}
                  email={userAuth.email}
                  address={userAuth.address}
                  zipCode={userAuth.zipCode}
                />
              </div>
            )}
          </section>
          <section>
            <h2 className="text-xl pt-10 pb-6 font-medium">
              Instrumentos no carrinho
            </h2>
            <ul className="grid gap-3 custom-shadow-2">
              {IsLoadingCart && (
                <div className="py-8 flex justify-center">
                  <span className="loader"></span>
                </div>
              )}
              {newData?.items &&
                newData.items?.length > 0 &&
                newData.items.map(item => (
                  <CartItem key={item.id} mini {...item} />
                ))}
            </ul>
          </section>
        </div>
        <section className="lg:col-span-2 order-2">
          <h2 className="font-merry text-xl pb-6">Resumo do pedido</h2>
          {!isErrorAuth && newData?.total && newData.total > 0 && (
            <div className="grid gap-6">
              <Resume total={newData.total} />
              {isLoadingPay ? (
                <Spinner className="mx-0 size-12 text-primary" />
              ) : (
                <Payment onPlaceOrder={handleConfirmOrder} />
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default PlaceOrder;
