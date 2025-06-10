// Este é um skeleton caso eu mude de ideia sobre o loader
export const InstrumentSkeleton = () => {
  return (
    <>
      <div className="overflow-clip w-full h-full aspect-square skeleton rounded-md"></div>
      <div className="py-6 md:py-8 lg:py-14 padding-x md:pl-0 md:pr-12 lg:pr-20">
        <div className="py-8 my-2 skeleton rounded-md"></div>
        {/* <div className="py-4 my-2 skeleton rounded-md"></div> */}
        <div className="py-6 my-2 mt-6 w-[60%] skeleton rounded-md"></div>
        <div className="py-6 my-2 mt-6 skeleton w-[70%] rounded-md"></div>
        <div className="py-6 my-2 mt-6 skeleton rounded-md"></div>
        <div className="py-2 my-2 skeleton w-[90%] rounded-md"></div>
        <div className="py-2 my-2 skeleton w-[70%] rounded-md"></div>
        <div className="py-6 mt-1 skeleton rounded-md"></div>
      </div>
    </>
  );
};
