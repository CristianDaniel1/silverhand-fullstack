import { useState, type ComponentPropsWithoutRef } from 'react';
import { EyeSlashIcon } from '../icons/EyeSlashIcon';
import { EyeIcon } from '../icons/EyeIcon';

type InputProps = {
  id: string;
  label: string;
  isRequired?: boolean;
  isInValid?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const PasswordInput = ({
  id,
  label,
  isRequired = false,
  isInValid = false,
  ...props
}: InputProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  function handleTogglePassword() {
    setPasswordIsVisible(prevState => !prevState);
  }

  return (
    <div className="py-4 relative">
      <label htmlFor={id} className="block font-medium pb-[2px]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required={isRequired}
        {...props}
        type={`${passwordIsVisible ? 'text' : 'password'}`}
        className={`px-2 py-3 w-full text-secundary border-b border-b-secundary  ${
          isInValid
            ? 'is-invalid focus-visible:outline focus:outline-red-700'
            : 'focus-visible:outline focus:outline-neutral-600'
        }`}
      />
      <button
        type="button"
        className="absolute block border-none right-4 top-1/2 text-secundary/80 xs:hover:text-primary duration-200 active:text-primary"
        onClick={handleTogglePassword}
      >
        {passwordIsVisible ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
};
