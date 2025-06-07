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
      className={`text-center ${className} w-full bg-primary/15 py-6 padding-x`}
    >
      <h2 className="text-xl xs:text-2xl text-primary font-medium pb-6">
        {title}
      </h2>
      <p>{message}</p>
    </div>
  );
};
