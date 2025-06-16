import { useRef, type ChangeEvent, type FormEvent } from 'react';
import { MagnifyingGlassIcon } from '../icons/MagnifyingGlassIcon.tsx';

interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Search = ({ setSearchTerm }: SearchProps) => {
  const resetForm = useRef<HTMLFormElement>(null);
  const lastChange = useRef<number | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (lastChange.current) clearTimeout(lastChange.current);

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get('search') as string;

    if (!search) setSearchTerm(undefined);

    if (lastChange.current && search) {
      setSearchTerm(search);
      clearTimeout(lastChange.current);
    }
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[24rem]"
      ref={resetForm}
    >
      <div>
        <label className="pb-3 inline-block">Busque o seu instrumento</label>
        <div className="flex">
          <input
            type="search"
            name="search"
            placeholder="Pesquisar"
            className="w-full block bg-transparent px-4 py-2 border border-secundary/20 focus-within:outline focus-within:outline-gray-200"
            onChange={handleChange}
          />
          <button
            className="border-2 duration-200 px-4 py-2 text-primary border-primary hover:bg-primary hover:text-secundary hover:border-transparent active:text-primary active:bg-white active:border-primary"
            aria-label="realizar busca"
          >
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
    </form>
  );
};
