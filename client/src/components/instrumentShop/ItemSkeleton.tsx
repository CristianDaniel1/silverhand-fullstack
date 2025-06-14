const classes = 'py-1 my-2 skeleton rounded-md';

export const ItemSkeleton = () => {
  return (
    <div className="overflow-clip" aria-hidden="true">
      <div className="overflow-clip aspect-square skeleton rounded-md"></div>
      <div className={`${classes}`}></div>
      <div className={`${classes}`}></div>
      <div className={`mt-3 ${classes} w-[70%]`}></div>
      <div className={`${classes} w-[60%]`}></div>
      <div className={`${classes} w-[80%]`}></div>
      <div className="py-6 mt-4 mb-2 skeleton rounded-md"></div>
    </div>
  );
};
