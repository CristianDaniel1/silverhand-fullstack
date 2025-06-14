import { useState } from 'react';
import { UserAuth } from '../../types';
import { Input } from '../ui/Input.tsx';
import { PencilIcon } from '../icons/PencilIcon.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UpdateUserSchema, UpdateUserType } from '../../schemas/updateUser.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/Button.tsx';
import { useUpdateUser } from '../../hooks/mutations/useUpdateUser.ts';
import { InvalidInput } from '../ui/InvalidInput.tsx';
import { Spinner } from '../ui/Spinner.tsx';
import { dateStringFormatter } from '../../utils/formatting.ts';

interface ProfileInfoProps {
  userInfo: UserAuth;
}

export const ProfileInfo = ({ userInfo }: ProfileInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate, isPending } = useUpdateUser();

  function handleClickEdit() {
    if (isEditing) reset();
    setIsEditing(prevState => !prevState);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserType>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: userInfo.name,
      email: userInfo.email,
      cpf: userInfo.cpf,
      phoneNumber: userInfo.phoneNumber,
      address: userInfo.address,
      zipCode: userInfo.zipCode,
    },
  });

  const onSubmit: SubmitHandler<UpdateUserType> = data => {
    mutate({ user: data, id: userInfo.id });
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-merry pb-6">Seus dados</h2>
        <button
          onClick={handleClickEdit}
          className={`flex items-center justify-center gap-2 px-5 py-2 border border-secundary/60 font-medium text-secundary/60 hover:border-black hover:text-black ${
            isEditing ? 'text-black border-black border' : ''
          }`}
        >
          <PencilIcon /> {isEditing ? 'Editando...' : 'Editar'}
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div>
            <Input
              id="name"
              label={`Nome ${isEditing ? '*' : ''}`}
              type="text"
              isInValid={errors.name ? true : false}
              {...register('name')}
              disabled={!isEditing}
              placeholder="Digite o seu nome"
            />
            {errors.name && <InvalidInput text={errors.name.message!} />}
          </div>
          <div>
            <Input
              id="email"
              label={`E-mail ${isEditing ? '*' : ''}`}
              autoComplete="email"
              type="email"
              disabled={!isEditing}
              isInValid={errors.email ? true : false}
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
              label={`CPF ${isEditing ? '*' : ''}`}
              disabled={!isEditing}
              type="number"
              isInValid={errors.cpf ? true : false}
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
              disabled={!isEditing}
              isInValid={errors.phoneNumber ? true : false}
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
              id="address"
              label={`Endereço ${isEditing ? '*' : ''}`}
              disabled={!isEditing}
              type="text"
              isInValid={errors.address ? true : false}
              {...register('address')}
              placeholder="Informe o Endereço"
            />
            {errors.address && <InvalidInput text={errors.address.message!} />}
          </div>
          <div>
            <Input
              id="cep"
              label={`CEP ${isEditing ? '*' : ''}`}
              disabled={!isEditing}
              type="number"
              isInValid={errors.zipCode ? true : false}
              {...register('zipCode')}
              placeholder="Informe o CEP"
            />
            {errors.zipCode && <InvalidInput text={errors.zipCode.message!} />}
          </div>
        </div>
        {isEditing && (
          <div className="flex gap-4 md:justify-end pt-10">
            <button
              type="button"
              disabled={isPending}
              onClick={handleClickEdit}
              className="px-6 py-3 border duration-200 border-secundary/40 font-medium tracking-wide text-secundary/70 hover:border-secundary hover:text-secundary active:border-secundary"
            >
              Cancelar
            </button>
            <Button
              disabled={isPending}
              className="flex items-center gap-2"
              bgColor
            >
              {isPending ? (
                <>
                  <Spinner className="size-6" /> 'Salvando...'
                </>
              ) : (
                'Confirmar'
              )}
            </Button>
          </div>
        )}
      </form>
      <p className="text-sm pt-4 font-medium text-secundary/80">
        Última atualização: {dateStringFormatter(userInfo.updatedAt)}
      </p>
    </>
  );
};
