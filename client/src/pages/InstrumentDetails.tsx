import { useParams } from 'react-router';
import { currencyFormatter } from '../utils/formatting.ts';
import { instruments } from '../data.ts';
import { BasicHeader } from '../components/header/BasicHeader.tsx';
import { AddToCart } from '../components/AddToCart.tsx';
import { useCartStore } from '../store/cartStore.ts';
import { DetailsImage } from '../components/instrumentDetails/DetailsImage.tsx';
import { RelatedInstruments } from '../components/instrumentDetails/RelatedInstruments.tsx';

export const InstrumentDetails = () => {
  const addToCart = useCartStore(state => state.addToCart);
  const params = useParams();

  const instrument = instruments.find(
    instrument => instrument.id === params.instrumentId
  );

  if (!instrument) return <p>Ops, ocorreu um erro!</p>;

  const { id, image, name, price, stringNum, category, quant } = instrument;

  function handleAddToCart() {
    addToCart({ id, image, name, price, stringNum, category, quant });
  }

  return (
    <>
      <BasicHeader />
      <main className="relative overflow-x-clip">
        <section className="padding-y max-container sm:padding-x">
          <article className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            <DetailsImage key={instrument.id} image={image} name={name} />
            <div className="padding-x md:pl-0 md:pr-12 lg:pr-20 py-6 md:py-8 lg:py-14">
              <div className="flex justify-between items-center pb-8 gap-4 flex-wrap">
                <h2 className="text-3xl">{name}</h2>
                <div className="text-amber-600 py-4 text-2xl lg:text-3xl font-semibold text-balance">
                  {currencyFormatter.format(price)}{' '}
                  <span className="text-secundary/70 text-sm font-medium">
                    À vista
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-secundary font-medium tracking-wider pb-4">
                  Detalhes:
                </h3>
                <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="px-4 py-3 border border-secundary/20">
                    Número de Cordas:{' '}
                    <span className="text-primary font-medium">
                      {stringNum}
                    </span>
                  </div>
                  <div className="px-4 py-3 border border-secundary/20">
                    Categoria:{' '}
                    <span className="capitalize text-primary font-medium">
                      {category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-t-secundary/10 pt-4">
                <p className="pb-4">
                  Adicione no seu carrinho e faça seu pagamento no{' '}
                  <span className="font-medium">
                    Pix, Cartão de Débito ou Crédito!
                  </span>
                </p>
                <AddToCart onAddToCart={handleAddToCart} className="w-full" />
              </div>
            </div>
          </article>
        </section>
        <RelatedInstruments
          instruments={instruments}
          currentCategory={category}
          currentId={id}
        />
      </main>
    </>
  );
};
