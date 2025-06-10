import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
  isRequired?: boolean;
  isInValid?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({
  label,
  id,
  isRequired = false,
  isInValid = false,
  ...props
}: InputProps) => {
  return (
    <div className="py-4">
      <label htmlFor={id} className="block font-medium pb-[2px]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required={isRequired}
        {...props}
        className={`px-2 py-3 w-full text-secundary border-b border-b-secundary  ${
          isInValid
            ? 'is-invalid focus-visible:outline focus:outline-red-700'
            : 'focus-visible:outline focus:outline-neutral-600'
        }`}
      />
    </div>
  );
};
