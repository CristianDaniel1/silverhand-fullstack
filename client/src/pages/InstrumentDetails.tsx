import { useParams } from 'react-router';
import { currencyFormatter } from '../utils/formatting.ts';
import { DetailsImage } from '../components/instrumentDetails/DetailsImage.tsx';
import { useInstrument } from '../hooks/queries/useInstrument.ts';
import { getLastNumberFromStr } from '../utils/stringFormatters.ts';
import { RelatedInstruments } from '../components/instrumentDetails/RelatedInstruments.tsx';
import { InstrumentCategory } from '../types';
import { categoriesObj } from '../data.ts';
import { StarIcon } from '../components/icons/StarIcon.tsx';
import { PixIcon } from '../components/icons/PixIcon.tsx';
import { CreditCardIcon } from '../components/icons/CreditCardIcon.tsx';
import { useAddToCart } from '../hooks/mutations/useAddToCart.ts';
import { Button } from '../components/ui/Button.tsx';

export const InstrumentDetails = () => {
  const params = useParams();
  const { mutate, isPending } = useAddToCart();

  const { data: instrument } = useInstrument({
    id: getLastNumberFromStr(params.instrumentId!),
  });

  function handleAddToCart() {
    if (instrument?.id) mutate({ instrumentId: instrument.id });
  }

  return (
    <>
      <main className="relative overflow-x-clip">
        <section className="padding-y max-container sm:padding-x">
          <article className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
            {instrument && (
              <>
                <DetailsImage
                  key={instrument.id}
                  image={instrument.image}
                  name={instrument.name}
                />
                <div className="padding-x md:pl-0 md:pr-12 lg:pr-20 py-6 md:py-8 lg:py-14">
                  <div className="flex justify-between items-center pb-6 gap-4 flex-wrap">
                    <div>
                      <h2 className="text-3xl">{instrument.name}</h2>
                      <div
                        className="flex items-center pt-4"
                        aria-hidden="true"
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <StarIcon className="text-amber-500" key={i} />
                        ))}
                      </div>
                    </div>
                    <div className="text-amber-600 py-4 text-2xl lg:text-3xl font-semibold text-balance">
                      {currencyFormatter.format(instrument.price)}{' '}
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
                          {instrument.stringNum}
                        </span>
                      </div>
                      <div className="px-4 py-3 border border-secundary/20">
                        Categoria:{' '}
                        <span className="capitalize text-primary font-medium">
                          {categoriesObj[instrument.category.toLowerCase()]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-secundary/10 pt-4">
                    <p className="pb-2">
                      Adicione no seu carrinho e faça já o seu pagamento
                    </p>
                    <div className="text-secundary flex gap-4 font-medium text-secundary/80 pb-4">
                      <div className="flex gap-2 items-center">
                        <PixIcon className="size-8" /> Pix
                      </div>
                      <div className="flex gap-2 items-center">
                        <CreditCardIcon className="size-8" /> Cartão
                      </div>
                    </div>
                    <Button
                      bgColor
                      disabled={isPending}
                      onClick={handleAddToCart}
                      className="w-full"
                    >
                      {isPending ? 'Adicionando...' : 'Adicionar no carrinho'}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </article>
        </section>
        {instrument && (
          <RelatedInstruments
            instrumentId={instrument.id}
            currentCategory={
              instrument.category.toLowerCase() as InstrumentCategory
            }
          />
        )}
      </main>
    </>
  );
};
