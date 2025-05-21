import { useState } from 'react';

interface DetailsImageProps {
  image: string;
  name: string;
}

const classesBtn =
  'size-16 sm:size-20 border bg-white border-secundary/10 overflow-clip rounded-lg';

export const DetailsImage = ({ image, name }: DetailsImageProps) => {
  const [classImg, setClassImg] = useState('');

  function changeImgClick(view: string) {
    setClassImg(view);
  }

  return (
    <div className="w-full h-full aspect-square relative animate-[opacity_0.5s_ease-in-out_backwards] shadow-lg">
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        <button className={classesBtn} onClick={() => changeImgClick('')}>
          <img src={image} alt={name} className="aspect-square" />
        </button>
        <button
          className={classesBtn}
          onClick={() => changeImgClick('instrument-2')}
        >
          <img
            src={image}
            alt={name}
            className="aspect-square instrument-btn-2"
          />
        </button>
        <button
          className={classesBtn}
          onClick={() => changeImgClick('instrument-3')}
        >
          <img
            src={image}
            alt={name}
            className="aspect-square instrument-btn-3"
          />
        </button>
      </div>
      <div className="overflow-clip w-full h-full">
        <img
          src={image}
          alt={name}
          className={`object-cover w-full h-full aspect-square ${classImg}`}
        />
      </div>
    </div>
  );
};
