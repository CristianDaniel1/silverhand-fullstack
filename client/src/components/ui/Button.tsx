import { type ReactNode, ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  children: ReactNode;
  bgColor?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  bgColor,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-6 text-center border-2 py-3 rounded ${
        bgColor
          ? 'bg-primary border-transparent text-secundary sm:hover:bg-white sm:hover:text-primary sm:hover:border-primary sm:active:text-secundary sm:active:bg-primary active:text-primary active:bg-white active:border-primary'
          : 'text-primary border-primary sm:hover:bg-primary sm:hover:text-secundary sm:hover:border-transparent sm:active:text-primary sm:active:bg-white sm:active:border-primary active:text-secundary active:bg-primary'
      } font-bold tracking-wider duration-200 z-[1] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
