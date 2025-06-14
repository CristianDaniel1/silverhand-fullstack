import johnnyImg from '../assets/johnny.webp';
import { Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const ForgotPassword = () => {
  return (
    <main className="relative min-h-screen">
      <div className="w-full h-full absolute overflow-clip aspect-video rounded-lg hidden lg:block top-0 left-0 bottom-0 right-0">
        <img
          src={johnnyImg}
          alt="Johnny Silverhand"
          className="object-cover w-full h-full"
        />
        <div className="text-center text-balance text-2xl bottom-0 text-sky-400 w-full left-0 pb-10 pt-6 absolute">
          <p>Da próxima, tenta anotar a senha, pode ser?</p>
        </div>
      </div>
      <div className="max-container flex justify-center items-center absolute top-0 right-0 w-full h-full">
        <div className="padding-x bg-transparent">
          <form className="block px-8 md:px-14 py-8 lg:py-16 xl:w-[40rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards] bg-white">
            <h2 className="text-4xl pb-6 font-merry text-center">
              Esqueceu a senha?
            </h2>
            <p className="pb-10 text-center">
              Informe o seu e-mail para enviarmos uma redefinição de senha
            </p>
            <div>
              <Input
                id="email"
                label="Seu e-mail"
                type="email"
                autoComplete="email"
                placeholder="Digite o seu e-mail"
              />
            </div>

            <Button
              className="text-lg my-6 w-full flex justify-center items-center gap-3"
              bgColor
            >
              tex
            </Button>

            <p className="text-center mt-6">
              Ainda não tem uma conta?{' '}
              <Link
                to="/cadastro"
                className="text-primary font-semibold sm:hover:text-secundary duration-200 active:text-secundary"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
