import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-secundary py-20 text-slate-100">
      <div className="max-container padding-x flex flex-col gap-8 md:block">
        <div className="w-28 md:w-36 md:ml-auto mx-auto md:mr-0 order-2">
          <img
            src={logo}
            height={120}
            width={180}
            alt="Logo Silverhand Store"
            className="object-contain"
          />
        </div>
        <p className="text-center text-balance order-1">
          &copy; 2024 SilverHand. Desenvolvido por{' '}
          <span className="font-medium">Cristian Daniel</span>
        </p>
      </div>
    </footer>
  );
};
