import { WarningCircleIcon } from '../icons/WarningCircleIcon';

interface ErrorMessageProps {
  title: string;
  message: string;
  className?: string;
}

export const ErrorMessage = ({
  title,
  message,
  className = '',
}: ErrorMessageProps) => {
  return (
    <div
      className={`${className} w-full bg-primary/15 py-8 padding-x flex gap-4`}
    >
      <div className="flex items-center justify-center">
        <WarningCircleIcon className="size-16 xs:size-[4.5rem] text-red-700" />
      </div>
      <div>
        <h2 className="text-xl xs:text-2xl text-primary font-medium pb-2">
          {title}
        </h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
