const FallbackElement = () => {
  return (
    <>
      <header className="overflow-x-clip w-full h-[65px] lg:h-24 px-4 md:px-5 lg:px-10 bg-secundary"></header>
      <main className="padding-y padding-x overflow-x-clip flex justify-center min-h-screen">
        <div className="py-4 min-h-screen">
          <span className="loader"></span>
        </div>
      </main>
    </>
  );
};

export default FallbackElement;
