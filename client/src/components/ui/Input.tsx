import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
  isInValid?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({
  label,
  id,
  isInValid = false,
  className = '',
  ...props
}: InputProps) => {
  return (
    <div className={`${className ? className : 'py-4'}`}>
      <label htmlFor={id} className="block font-medium pb-[2px]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        className={`px-2 py-3 w-full text-secundary border-b border-b-secundary disabled:bg-gray-100 disabled:border-none ${
          isInValid
            ? 'is-invalid focus-visible:outline focus:outline-red-700'
            : 'focus-visible:outline focus:outline-neutral-600'
        }`}
      />
    </div>
  );
};
