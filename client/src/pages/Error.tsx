import { Footer } from '../components/Footer.tsx';

import silverhand from '../assets/Johnny-Silverhand-playing-guitar.webp';
import { Link, ScrollRestoration, useRouteError } from 'react-router';
import { Header } from '../components/header/Header.tsx';
import { CustomError } from '../utils/CustomError.tsx';

const ErrorElement = () => {
  const error = (useRouteError() as CustomError) || Error;

  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="overflow-clip min-h-screen bg-slate-50">
        <div className="max-container bg-white h-full padding-y padding-x min-h-screen">
          <h2 className="text-center text-3xl sm:text-4xl py-14">
            <div className="font-merry pb-4">
              Ops, ocorreu um erro{' '}
              <span className="font-semibold text-primary">{error.status}</span>
            </div>
            <div className="text-xl sm:text-2xl">
              {error.message ||
                (error.status === 404 ? 'Acho que o caminho tá errado' : '')}
            </div>
          </h2>
          <div className="max-container-2 mx-auto relative overflow-clip rounded-md">
            <img
              src={silverhand}
              alt="Johnny Silverhand tocando guitarra"
              className="object-cover w-full h-full"
            />
            <div className="text-center text-balance px-3 sm:px-6 pb-6 sm:text-xl flex flex-col sm:flex-row bg-black sm:bg-transparent sm:absolute bottom-0 sm:bottom-auto sm:top-8 text-tertiary w-full justify-center items-center gap-3 sm:gap-6">
              <p>
                {error.status === 404
                  ? 'Ou você escreveu errado ou isso nem existe,'
                  : 'Que droga,'}{' '}
                tenta acessar essa página:
              </p>
              <Link
                to="/"
                className="px-3 py-2 border-2 font-medium text-primary border-primary rounded hover:text-white hover:border-white duration-200"
              >
                Página principal
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorElement;
