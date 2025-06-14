const InstrumentDetailsSkeleton = () => {
  return (
    <div className="padding-y max-container sm:padding-x min-h-screen">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
        <div className="overflow-clip w-full h-full aspect-square skeleton rounded-md"></div>
        <div className="py-6 md:py-8 lg:py-14 padding-x md:pl-0 md:pr-12 lg:pr-20">
          <div className="py-8 my-2 skeleton w-[90%] rounded-md"></div>
          <div className="py-4 my-2 skeleton w-[85%] rounded-md"></div>
          <div className="py-3 my-2 mt-6 w-[50%] skeleton rounded-md"></div>
          <div className="py-3 my-2 mt-6 w-[50%] skeleton rounded-md"></div>
          <div className="py-6 my-2 mt-6 skeleton w-[50%] rounded-md"></div>
          <div className="py-6 my-2 mt-6 skeleton rounded-md"></div>
          <div className="py-2 my-2 skeleton w-[90%] rounded-md"></div>
          <div className="py-2 my-2 skeleton w-[60%] rounded-md"></div>
          <div className="py-2 my-2 skeleton w-[40%] rounded-md"></div>
          <div className="py-6 mt-1 skeleton rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentDetailsSkeleton;
