import { ShopList } from './ShopList.tsx';
import { ShopItem } from './ShopItem.tsx';
import { instruments } from '../../data.ts';
import img from '../../assets/cool-guitar.webp';
import { Search } from './Search.tsx';
import { useState } from 'react';
import { Filter } from './Filter.tsx';
import { useFilterStore } from '../../store/filterStore.ts';

let filteredinstruments = [...instruments];

export const ShopContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const category = useFilterStore(state => state.category);
  const selectedStringNum = useFilterStore(state => state.selectedStringNum);

  filteredinstruments = instruments;

  if (searchTerm) {
    filteredinstruments = instruments?.filter(instrument =>
      instrument.name
        .toLowerCase()
        .trim()
        .includes(searchTerm?.toLowerCase().trim())
    );
  }

  if (selectedStringNum) {
    filteredinstruments = filteredinstruments.filter(
      instrument => instrument.stringNum === selectedStringNum
    );
  }

  if (category !== 'todas') {
    filteredinstruments = filteredinstruments.filter(
      instrument => instrument.category === category
    );
  }

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
          <Filter
            currentStringNum={selectedStringNum}
            currentCateg={category}
          />
        </div>
        {searchTerm && (
          <p className="pb-4 text-balance">
            Pesquisando por <span className="font-medium">{searchTerm}</span>
          </p>
        )}
        <ShopList>
          {filteredinstruments.length ? (
            filteredinstruments.map(instrument => (
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
            ))
          ) : (
            <p>0 resultados encontrados na sua busca.</p>
          )}
        </ShopList>
      </section>
    </>
  );
};
