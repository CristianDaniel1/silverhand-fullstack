import { Link } from 'react-router';
import { BasicHeader } from '../components/header/BasicHeader.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import signUpImg from '../assets/rock-concert.webp';

export const SignUp = () => {
  return (
    <>
      <BasicHeader />
      <main className="relative overflow-x-clip lg:pt-12">
        <section className="padding-y flex justify-center max-container">
          <div className="max-container md:padding-x flex items-center py-6">
            <div className="hidden lg:block absolute top-0 left-0 w-full z-[1] h-full overflow-clip">
              <img
                src={signUpImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <form className=" px-6 md:px-12 py-12 md:w-[47rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards] bg-white z-[2]">
              <h2 className="text-4xl pb-6 font-merry text-center">Cadastro</h2>
              <p className="pb-10 text-center">
                Preencha os campos abaixo e aproveite variedade e estilo de{' '}
                <span className="text-primary font-medium">SilverHand</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <Input
                  id="name"
                  label="Nome *"
                  type="text"
                  placeholder="Digite o seu nome"
                />
                <Input
                  id="email"
                  label="Email *"
                  autoComplete="email"
                  type="email"
                  placeholder="Digite o seu e-mail"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <Input
                  id="cpf"
                  label="CPF *"
                  type="text"
                  placeholder="Digite o seu CPF"
                />
                <Input
                  id="telefone"
                  label="Telefone/Celular"
                  type="text"
                  isRequired={false}
                  placeholder="Digite o seu Telefone ou celular"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <Input
                  id="password"
                  label="Senha *"
                  autoComplete="new-password"
                  placeholder="Digite uima senha segura"
                  type="password"
                />
                <Input
                  id="cep"
                  label="CEP para entrega *"
                  type="text"
                  placeholder="Informe o CEP"
                />
              </div>
              <Button className="text-lg my-6 w-full" bgColor>
                Cadastrar-se
              </Button>
              <p className="text-center mt-6 text-balance">
                Já tem uma conta em SilverHand?{' '}
                <Link to="/login" className="text-primary font-semibold">
                  Faça seu login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
