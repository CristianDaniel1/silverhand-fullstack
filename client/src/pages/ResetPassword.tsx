import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '../components/ui/PasswordInput';
import { InvalidInput } from '../components/ui/InvalidInput';
import { PasswordSchema, PasswordType } from '../schemas/login';
import { useResetPassword } from '../hooks/mutations/useResetPassword';
import { Spinner } from '../components/ui/Spinner';

const ResetPassword = () => {
  const { mutate, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordType>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<PasswordType> = data => {
    if (data.confirmPassword !== data.password) return;

    mutate({ newPassword: data.password });
  };

  return (
    <main className="pt-8 sm:pt-12 bg-slate-50">
      <div className="padding-y flex justify-center gap-14 max-container-3 lg:max-container-2 min-h-screen padding-x bg-white">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="block px-8 md:px-14 py-8 lg:py-16 xl:w-[40rem] mx-auto rounded-md animate-[slide-up_0.5s_ease-in-out_backwards] bg-white"
          >
            <h2 className="text-4xl pb-6 font-merry text-center">
              Informe a sua nova senha
            </h2>
            <p className="pb-10 text-center">
              Digite uma senha segura, e não compartilhe com ninguém
            </p>

            <div className="relative">
              <PasswordInput
                id="password"
                label="Digite a sua nova senha"
                placeholder="Digite a sua senha"
                isInValid={errors.password ? true : false}
                autoComplete="current-password"
                {...register('password')}
              />
              {errors.password && (
                <InvalidInput text={errors.password.message!} />
              )}
            </div>
            <div>
              <PasswordInput
                id="confirm-password"
                label="Confirmar senha"
                autoComplete="new-password"
                {...register('confirmPassword')}
                isInValid={errors.password ? true : false}
                placeholder="Confirme a sua nova senha"
              />
              {errors.confirmPassword && (
                <InvalidInput text={errors.confirmPassword.message!} />
              )}
            </div>
            <Button
              className="text-lg my-6 w-full flex justify-center items-center gap-3"
              bgColor
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Spinner className="size-6" /> <span>Carregando...</span>
                </>
              ) : (
                'Confirmar'
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
