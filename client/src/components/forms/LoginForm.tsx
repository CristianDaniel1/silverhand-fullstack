import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginType } from '../../schemas/login.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/mutations/useLogin.ts';
import { InvalidInput } from '../ui/InvalidInput.tsx';
import { Spinner } from '../ui/Spinner.tsx';
import { Button } from '../ui/Button.tsx';
import { Link } from 'react-router';
import { Input } from '../ui/Input.tsx';
import { PasswordInput } from '../ui/PasswordInput.tsx';

export const LoginForm = () => {
  const { mutate, isPending, isError, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginType> = data => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-8 md:px-14 py-8 lg:py-16 xl:w-[40rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards]"
    >
      <h2 className="text-4xl pb-6 font-merry text-center">
        Bem-vindo(a) de volta!
      </h2>
      <p className="pb-10 text-center">
        Entre na sua conta e aproveite todos os instrumentos no puro estilo
        rock!
      </p>
      <div>
        <Input
          id="email"
          label="Seu e-mail"
          type="email"
          {...register('email')}
          autoComplete="email"
          isInValid={errors.email ? true : false}
          placeholder="Digite o seu e-mail"
        />
        {errors.email && <InvalidInput text={errors.email.message!} />}
      </div>
      <div className="relative">
        <PasswordInput
          id="password"
          label="Sua senha"
          placeholder="Digite a sua senha"
          isInValid={errors.password ? true : false}
          autoComplete="current-password"
          {...register('password')}
        />
        {errors.password && <InvalidInput text={errors.password.message!} />}
      </div>
      <Button
        className="text-lg my-6 w-full flex justify-center items-center gap-3"
        bgColor
      >
        {isPending && <Spinner className="size-6" />}
        {isPending ? 'Carregando...' : 'Entrar'}
      </Button>
      {isError && (
        <div className="text-center">
          <InvalidInput text={error?.message || 'Dados incorretos'} />
        </div>
      )}
      <p className="text-center mt-6">
        Ainda não tem uma conta?{' '}
        <Link
          to="/cadastro"
          className="text-primary font-semibold sm:hover:text-secundary duration-200 active:text-secundary"
        >
          Cadastre-se
        </Link>
      </p>
      <p className="text-center mt-6">
        <Link
          to="/"
          className="text-primary font-semibold sm:hover:text-secundary duration-200 active:text-secundary"
        >
          Esqueci minha senha
        </Link>
      </p>
    </form>
  );
};
