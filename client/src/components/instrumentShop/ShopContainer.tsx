import { useInstruments } from '../../hooks/useInstruments.ts';
import { ShopItem } from './ShopItem.tsx';
import { ShopList } from './ShopList.tsx';

import img from '../../assets/cool-guitar.webp';
import { useFilterStore } from '../../store/filterStore.ts';
import { Filter } from './Filter.tsx';
import { useState } from 'react';
import { Search } from './Search.tsx';
import { ItemSkeleton } from './ItemSkeleton.tsx';

export const ShopContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const category = useFilterStore(state => state.category);
  const stringNum = useFilterStore(state => state.stringNum);
  const {
    instruments,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInstruments({
    category,
    stringNum,
    search: searchTerm,
  });

  const instrumentsLength = instruments.length;
  const isFetching = isPending || isFetchingNextPage;

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-6 bg-secundary h-28 sm:h-40 md:h-60 relative">
        <img
          src={img}
          loading="lazy"
          alt="guitarra legal"
          className="object-cover h-full w-full opacity-40"
        />
        <h2 className="padding-y font-merry font-light text-2xl sm:text-3xl xl:text-4xl text-center w-full text-white absolute">
          Instrumentos de Cordas
        </h2>
      </div>
      <section
        id="shop"
        className="max-container padding-y padding-x min-h-[80vh]"
      >
        <div className=" flex flex-col gap-6 flex-wrap lg:flex-row md:justify-between border-b border-b-secundary/10 mb-12 md:pb-8">
          <Search setSearchTerm={setSearchTerm} />
          <Filter currentStringNum={stringNum} currentCateg={category} />
          {searchTerm && (
            <p className="pb-4 text-balance">
              Pesquisando por <span className="font-medium">{searchTerm}</span>
            </p>
          )}
        </div>
        <ShopList>
          {instruments &&
            instruments.map(instrument => {
              if (instrument)
                return (
                  <ShopItem
                    key={instrument.id}
                    id={instrument.id}
                    price={instrument.price}
                    name={instrument.name}
                    image={instrument.image}
                    stringNum={instrument.stringNum}
                    category={instrument.category}
                    quant={instrument.quant}
                  />
                );
            })}
          {!instrumentsLength && !isPending && (
            <p>0 resultados encontrados na sua busca.</p>
          )}
          {isFetching &&
            Array.from({ length: 8 }, (_, i) => <ItemSkeleton key={i} />)}
        </ShopList>
        {hasNextPage && !isFetching && (
          <button
            onClick={() => {
              void fetchNextPage();
            }}
          >
            FETCH
          </button>
        )}
      </section>
    </>
  );
};
