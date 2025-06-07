import { useState } from 'react';
import { UserAuth } from '../../types';
import { Input } from '../ui/Input.tsx';
import { Button } from '../ui/Button.tsx';

interface ProfileInfoProps {
  userInfo: UserAuth;
}

export const ProfileInfo = ({ userInfo }: ProfileInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);

  function handleClickEdit() {
    setIsEditing(prevState => !prevState);
  }

  return (
    <>
      <div className="flex justify-between">
        <h2>Seus dados</h2>
        <Button onClick={handleClickEdit} bgColor={isEditing} className="px-8">
          {isEditing ? 'Editando...' : 'Editar'}
        </Button>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Input
            id="name"
            label={`Nome ${isEditing ? '*' : ''}`}
            type="text"
            defaultValue={userInfo.name}
            disabled={!isEditing}
            placeholder="Digite o seu nome"
          />
          <Input
            id="email"
            label={`E-mail ${isEditing ? '*' : ''}`}
            autoComplete="email"
            type="email"
            disabled={!isEditing}
            defaultValue={userInfo.email}
            placeholder="Digite o seu e-mail"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Input
            id="cpf"
            label={`CPF ${isEditing ? '*' : ''}`}
            disabled={!isEditing}
            type="text"
            defaultValue={userInfo.cpf}
            placeholder="Digite o seu CPF"
          />
          <Input
            id="telefone"
            label="Telefone/Celular"
            type="text"
            disabled={!isEditing}
            defaultValue={userInfo.phoneNumber || ''}
            isRequired={false}
            placeholder="Digite o seu Telefone ou celular"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Input
            id="address"
            label={`Endereço ${isEditing ? '*' : ''}`}
            disabled={!isEditing}
            type="text"
            defaultValue={userInfo.address}
            placeholder="Informe o Endereço"
          />
          <Input
            id="cep"
            label={`CEP ${isEditing ? '*' : ''}`}
            disabled={!isEditing}
            type="text"
            defaultValue={userInfo.zipCode}
            placeholder="Informe o CEP"
          />
        </div>
      </form>
    </>
  );
};
