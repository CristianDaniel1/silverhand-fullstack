import { type Instrument } from '../../types';
import { ShopItem } from '../instrumentShop/ShopItem.tsx';
import { ShopList } from '../instrumentShop/ShopList.tsx';

interface RelatedProps {
  instruments: Instrument[];
  currentCategory: string;
  currentId: string;
}

export const RelatedInstruments = ({
  instruments,
  currentCategory,
  currentId,
}: RelatedProps) => {
  const filteredinstruments = instruments.filter(
    itemFilter =>
      itemFilter.category === currentCategory && itemFilter.id !== currentId
  );

  const limitItems = filteredinstruments.slice(0, 4);

  return (
    <section className="max-container padding-x border-t border-t-secundary/20">
      <h2 className="font-merry py-14 font-light text-2xl lg:text-3xl">
        Instrumentos Relacionados
      </h2>
      {limitItems.length ? (
        <ShopList>
          {limitItems.map(item => (
            <ShopItem key={item.id} {...item} />
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
