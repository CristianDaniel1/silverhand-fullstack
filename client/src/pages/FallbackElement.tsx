import { Footer } from '../components/Footer.tsx';

export const FallbackElement = () => {
  return (
    <>
      <header className="overflow-x-clip fixed w-full z-50 bg-secundary">
        <div className="flex justify-between gap-4 relative font-semibold tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 px-4 md:px-5 lg:px-10 max-container"></div>
      </header>
      <main className="padding-y padding-x overflow-clip max-container min-h-screen text-center">
        Carregando...
      </main>
      <Footer />
    </>
  );
};
