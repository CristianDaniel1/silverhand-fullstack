export const Message = ({ message }: { message: string }) => {
  return (
    <p className="font-semibold text-center text-primary p-3 bg-white border text-lg border-primary absolute top-0 left-1/2 -translate-x-1/2 message">
      {message}
    </p>
  );
};
