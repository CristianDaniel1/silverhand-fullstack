import { Footer } from '../components/Footer.tsx';
import { BasicHeader } from '../components/header/BasicHeader.tsx';

import silverhand from '../assets/Johnny-Silverhand-playing-guitar.webp';
import { Link } from 'react-router';

export const Error = () => {
  return (
    <>
      <BasicHeader />
      <main className="padding-y padding-x overflow-clip max-container min-h-screen">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold py-14">
          <span>Erro 404</span>
          <div className="text-2xl sm:text-3xl font-normal pt-3">
            Página não encontrada!
          </div>
        </h2>

        <div className="max-w-3xl mx-auto relative overflow-clip rounded-md">
          <img
            src={silverhand}
            alt="Johnny Silverhand tocando guitarra"
            className="object-cover w-full h-full"
          />
          <div className="text-center px-3 pb-6 sm:text-xl flex flex-col sm:flex-row absolute top-8 text-tertiary w-full justify-center items-center gap-3 sm:gap-6">
            <p>Caminho errado, tenta acessar essa página:</p>
            <Link
              to="/"
              className="px-3 py-2 border-2 font-medium text-primary border-primary rounded hover:text-white hover:border-white duration-200"
            >
              Página principal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
