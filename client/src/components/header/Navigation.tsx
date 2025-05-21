import { useFilterStore } from '../../store/filterStore';

interface NavigationProps {
  isVisible: boolean;
  onCloseBar: (visible: boolean) => void;
  onToggleBar: () => void;
}

export const Navigation = ({
  isVisible,
  onCloseBar,
  onToggleBar,
}: NavigationProps) => {
  const setCategory = useFilterStore(state => state.setCategory);
  const clearFilters = useFilterStore(state => state.clearFilters);

  function handleCloseBar(categ: string) {
    clearFilters();
    setCategory(categ);
    if (isVisible) onCloseBar(false);
  }

  return (
    <nav className="flex justify-self-center tracking-wider text-sm z-40 text-white">
      {isVisible && (
        <div
          className={`${
            !isVisible ? 'hidden hide-backdrop' : 'lg:hidden open-backdrop'
          } absolute z-30 bg-black/60 left-0 w-full min-h-screen pb-4 top-0`}
          onClick={onToggleBar}
        ></div>
      )}
      <ul
        className={`absolute px-4 pt-40 pb-10 lg:py-4 top-0 right-0 flex flex-col lg:justify-center items-center gap-6 lg:gap-8 duration-500 transition-all lg:transition-none h-screen w-60 sm:w-80 lg:w-screen bg-[#131313] lg:translate-x-0 lg:static lg:h-auto lg:flex-row z-40 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <li>
          <a
            href="#shop"
            onClick={() => handleCloseBar('guitarra')}
            className="hover:text-primary duration-200"
          >
            Guitarras
          </a>
        </li>

        <li>
          <a
            href="#shop"
            onClick={() => handleCloseBar('violão')}
            className="hover:text-primary duration-200"
          >
            Violões
          </a>
        </li>
        <li>
          <a
            href="#shop"
            onClick={() => handleCloseBar('contrabaixo')}
            className="hover:text-primary duration-200"
          >
            Contrabaixos
          </a>
        </li>
      </ul>
    </nav>
  );
};
