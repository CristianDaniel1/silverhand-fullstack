import { CartItem } from '../components/cart/CartItem.tsx';
import { DestinationInfo } from '../components/placeOrder/DestinationInfo.tsx';
import { Payment } from '../components/placeOrder/Payment.tsx';
import { Resume } from '../components/placeOrder/Resume.tsx';
import { useAuth } from '../hooks/queries/useAuth.ts';
import { useCart } from '../hooks/queries/useCart.ts';
import { enhanceCart } from '../utils/priceCalculator.ts';

const PlaceOrder = () => {
  const { userAuth, isError: isErrorAuth } = useAuth();
  const { data } = useCart();

  let newData;
  if (data && data.items?.length) {
    newData = enhanceCart(data);
  }

  return (
    <main className="pt-8 sm:pt-12 bg-slate-50">
      <div className="padding-y grid grid-cols-1 lg:grid-cols-5 gap-14 max-container-3 lg:max-container-2 min-h-screen padding-x bg-white">
        <div className="lg:col-span-3 order-3 lg:order-1">
          <section className="border-b border-b-secundary/20 pb-10">
            <h1 className="font-merry text-xl pb-6">Finalizar compra</h1>
            {userAuth && (
              <DestinationInfo
                name={userAuth.name}
                email={userAuth.email}
                address={userAuth.address}
                zipCode={userAuth.zipCode}
              />
            )}
          </section>
          <section>
            <h2 className="text-xl pt-10 pb-6 font-medium">
              Instrumentos no carrinho
            </h2>
            <ul className="grid gap-3 custom-shadow-2">
              {newData?.items &&
                newData.items?.length > 0 &&
                newData.items.map(item => (
                  <CartItem key={item.id} mini {...item} />
                ))}
            </ul>
          </section>
        </div>
        {!isErrorAuth && newData?.total && newData.total > 0 && (
          <section className="lg:col-span-2 order-2">
            <h2 className="font-merry text-xl pb-6">Resumo do pedido</h2>
            <div className="grid gap-6">
              <Resume total={newData.total} />
              <Payment />
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default PlaceOrder;
