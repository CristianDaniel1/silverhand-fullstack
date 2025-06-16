import { Input } from '../ui/Input';

interface DestinationInfoProps {
  name: string;
  email: string;
  address: string;
  zipCode: string;
}

export const DestinationInfo = ({
  name,
  email,
  address,
  zipCode,
}: DestinationInfoProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 sm:gap-x-4">
      <Input
        label="Nome do Destinatário"
        id="name"
        defaultValue={name}
        disabled
        className="sm:col-span-2"
      />

      <Input
        label="E-mail"
        id="email"
        className="sm:py-4"
        defaultValue={email}
        disabled
      />
      <Input
        label="CEP"
        id="cep"
        className="sm:py-4"
        defaultValue={zipCode}
        disabled
      />
      <Input
        label="Endereço de entrega"
        id="address"
        defaultValue={address}
        disabled
        className="sm:col-span-2"
      />
    </div>
  );
};
