import { Link } from 'react-router';
import { Button } from '../ui/Button.tsx';
import { Input } from '../ui/Input.tsx';
import { PasswordInput } from '../ui/PasswordInput.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterSchema, RegisterType } from '../../schemas/register.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister } from '../../hooks/mutations/useRegister.ts';
import { InvalidInput } from '../ui/InvalidInput.tsx';
import { Spinner } from '../ui/Spinner.tsx';
import { registerDefault } from '../../utils/defaultValues.ts';

export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    ...registerDefault,
  });

  const onSubmit: SubmitHandler<RegisterType> = data => {
    const { confirmPassword, ...user } = data;
    if (confirmPassword !== user.password) return;
    mutate({ user });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-6 md:px-12 py-12 md:w-[47rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards] bg-white z-[2]"
    >
      <h2 className="text-4xl pb-6 font-merry text-center">Cadastro</h2>
      <p className="pb-10 text-center">
        Preencha os campos abaixo e aproveite variedade e estilo de{' '}
        <span className="text-primary font-medium">SilverHand</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <Input
            id="name"
            label="Nome *"
            type="text"
            {...register('name')}
            placeholder="Digite o seu nome"
          />
          {errors.name && <InvalidInput text={errors.name.message!} />}
        </div>
        <div>
          <Input
            id="email"
            label="E-mail *"
            autoComplete="email"
            type="email"
            {...register('email')}
            placeholder="Digite o seu e-mail"
          />
          {errors.email && <InvalidInput text={errors.email.message!} />}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <Input
            id="cpf"
            label="CPF *"
            type="number"
            {...register('cpf')}
            placeholder="Digite o seu CPF"
          />
          {errors.cpf && <InvalidInput text={errors.cpf.message!} />}
        </div>
        <div>
          <Input
            id="telefone"
            label="Telefone/Celular"
            type="number"
            {...register('phoneNumber')}
            placeholder="Digite o seu Telefone ou celular"
          />
          {errors.phoneNumber && (
            <InvalidInput text={errors.phoneNumber.message!} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <Input
            id="endereco"
            label="Endereço *"
            placeholder="Digite o seu endereço"
            type="text"
            {...register('address')}
          />
          {errors.address && <InvalidInput text={errors.address.message!} />}
        </div>
        <div>
          <Input
            id="cep"
            label="CEP para entrega *"
            type="number"
            {...register('zipCode')}
            placeholder="Informe o CEP"
          />
          {errors.zipCode && <InvalidInput text={errors.zipCode.message!} />}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <PasswordInput
            id="password"
            label="Senha *"
            autoComplete="new-password"
            {...register('password')}
            placeholder="Digite uma senha segura"
          />
          {errors.password && <InvalidInput text={errors.password.message!} />}
        </div>
        <div>
          <PasswordInput
            id="confirm-password"
            label="Confirmar senha *"
            autoComplete="new-password"
            {...register('confirmPassword')}
            placeholder="Confirme a sua nova senha"
          />
          {errors.confirmPassword && (
            <InvalidInput text={errors.confirmPassword.message!} />
          )}
        </div>
      </div>
      <Button
        disabled={isPending}
        className="text-lg my-6 w-full flex items-center gap-2 justify-center"
        bgColor
      >
        {isPending ? (
          <>
            <Spinner /> Carregando...
          </>
        ) : (
          'Cadastrar-se'
        )}
      </Button>
      <p className="text-center mt-6 text-balance">
        Já tem uma conta em SilverHand?{' '}
        <Link to="/login" className="text-primary font-semibold">
          Faça seu login
        </Link>
      </p>
    </form>
  );
};
