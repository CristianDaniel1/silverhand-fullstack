import { Link } from 'react-router';
import { BasicHeader } from '../components/header/BasicHeader.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';

import loginImg from '../assets/rock-in.webp';
import { useActionState } from 'react';
import { useAuthStore } from '../store/authStore.ts';

export const Login = () => {
  const postLogin = useAuthStore(state => state.postLogin);
  async function loginAction(_: unknown, formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const errors: string[] = [];

    if (typeof email !== 'string' || typeof password !== 'string') {
      errors.push('E-mail e senha são obrigatórios.');
      return { errors, enteredValues: { email: null, password: null } };
    }

    if (errors.length > 0)
      return { errors, enteredValues: { email, password } };

    await postLogin({ email: email, password });

    return { errors: null };
  }

  const [formState, formAction] = useActionState(loginAction, {
    errors: null,
  });

  return (
    <>
      <BasicHeader />
      <main className="relative overflow-x-clip lg:pt-12">
        <section className="padding-y grid grid-cols-1 lg:grid-cols-2 max-container">
          <div className="h-full w-full overflow-clip aspect-video rounded-lg hidden lg:flex">
            <img
              src={loginImg}
              alt="taças de vinho em cima de uma mesa"
              className="object-cover w-full h-full brightness-75 aspect-video animate-opacity"
            />
          </div>
          <div className="max-container md:padding-x flex items-center py-6">
            <form
              action={formAction}
              className=" px-8 md:px-14 py-8 lg:py-16 xl:w-[40rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards]"
            >
              <h2 className="text-4xl pb-6 font-merry text-center">
                Bem-vindo(a) de volta!
              </h2>
              <p className="pb-10 text-center">
                Entre na sua conta e aproveite todos os instrumentos no puro
                estilo rock!
              </p>
              <Input
                id="email"
                label="Seu e-mail"
                type="email"
                autoComplete="username"
                placeholder="Digite o seu e-mail"
                defaultValue={formState.enteredValues?.email || ''}
              />
              <Input
                id="password"
                label="Sua senha"
                placeholder="Digite a sua senha"
                autoComplete="current-password"
                type="password"
                defaultValue={formState.enteredValues?.password || ''}
              />
              {formState.errors && <div>Errrosss</div>}
              <Button className="text-lg my-6 w-full" bgColor>
                Entrar
              </Button>
              <p className="text-center mt-6">
                Ainda não tem uma conta?{' '}
                <Link to="/cadastro" className="text-primary font-semibold">
                  Cadastre-se
                </Link>
              </p>
              <p className="text-center mt-6">
                Ainda não tem uma conta?{' '}
                <Link to="/perfil" className="text-primary font-semibold">
                  Cadastre-se
                </Link>
              </p>
              <p className="text-center mt-6">
                Esqueceu a senha?{' '}
                <Link to="/" className="text-primary font-semibold">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
