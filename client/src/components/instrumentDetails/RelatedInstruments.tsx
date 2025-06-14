import { useInstruments } from '../../hooks/queries/useInstruments.ts';
import { InstrumentCategory } from '../../types';
import { ShopItem } from '../instrumentShop/ShopItem.tsx';
import { ShopList } from '../instrumentShop/ShopList.tsx';
import { ErrorMessage } from '../ui/ErrorMessage.tsx';

interface RelatedProps {
  instrumentId: number;
  currentCategory: InstrumentCategory;
}

export const RelatedInstruments = ({
  instrumentId,
  currentCategory,
}: RelatedProps) => {
  const { instruments, isPending, isError, error } = useInstruments({
    category: currentCategory,
  });

  const filteredInstruments =
    instruments?.filter(item => item?.id !== instrumentId) || [];

  if (isPending) {
    return (
      <div className="flex justify-center padding-y">
        <span className="loader"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        title="Erro ao carregar instrumentos"
        className="justify-center"
        message={
          error?.message || 'Ocorreu um erro inesperado, volte mais tarde.'
        }
      />
    );
  }

  return (
    <section className="max-container padding-x border-t border-t-secundary/20">
      <h2 className="font-merry py-14 font-light text-2xl lg:text-3xl">
        Instrumentos Relacionados
      </h2>

      {filteredInstruments.length > 0 ? (
        <ShopList>
          {filteredInstruments.map(item => (
            <ShopItem key={item!.id} {...item!} />
          ))}
        </ShopList>
      ) : (
        <p className="text-xl font-medium pt-6 pb-20">
          Sem instrumentos relacionados disponíveis.
        </p>
      )}
    </section>
  );
};
