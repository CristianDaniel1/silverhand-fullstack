const FallbackElement = () => {
  return (
    <>
      <header className="w-full h-[65px] lg:h-24 bg-[#010012] fixed top-0 z-50"></header>
      <div className="flex justify-center min-h-screen pt-[65px] lg:pt-24">
        <div className="padding-y min-h-screen">
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
};

export default FallbackElement;
