import { useInstruments } from '../../hooks/queries/useInstruments.ts';
import { InstrumentCategory, type Instrument } from '../../types';
import { ShopItem } from '../instrumentShop/ShopItem.tsx';
import { ShopList } from '../instrumentShop/ShopList.tsx';
import { ErrorMessage } from '../ui/ErrorMessage.tsx';
import { Spinner } from '../ui/Spinner.tsx';

interface RelatedProps {
  instrumentId: number;
  currentCategory: InstrumentCategory;
}

let relatedArray: (Instrument | undefined)[] = [];

export const RelatedInstruments = ({
  instrumentId,
  currentCategory,
}: RelatedProps) => {
  const { instruments, isPending, isError, error } = useInstruments({
    category: currentCategory,
  });

  if (instruments) {
    relatedArray = [...instruments];
    const existingItemIndex = relatedArray?.findIndex(
      item => item?.id === instrumentId
    );

    if (existingItemIndex) relatedArray.splice(existingItemIndex, 1);
  }

  return (
    <section className="max-container padding-x border-t border-t-secundary/20">
      <h2 className="font-merry py-14 font-light text-2xl lg:text-3xl">
        Instrumentos Relacionados
      </h2>
      {relatedArray?.length > 0 && (
        <ShopList>
          {relatedArray.map(item => {
            return <ShopItem key={item!.id} {...item!} />;
          })}
        </ShopList>
      )}
      {!isError && !isPending && !relatedArray?.length && (
        <p className="text-xl font-medium pt-6 pb-20">
          Sem instrumentos relacionados disponíveis.
        </p>
      )}
      {isPending && (
        <div className="flex justify-center padding-y">
          <Spinner className="size-14" />
        </div>
      )}
      {isError && (
        <ErrorMessage
          title="Erro ao carregar instrumentos"
          className="justify-center"
          message={
            error?.message || 'Ocorreu um erro inesperado, volte mais tarde.'
          }
        />
      )}
    </section>
  );
};
