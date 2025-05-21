import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
  isRequired?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({
  label,
  id,
  isRequired = true,
  ...props
}: InputProps) => {
  return (
    <div className="py-4">
      <label htmlFor={id} className="block font-medium pb-2 sm:pb-3">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required={isRequired}
        {...props}
        className="px-2 py-3 w-full text-secundary border-b border-b-secundary focus-visible:outline focus:outline-neutral-600"
      />
    </div>
  );
};
