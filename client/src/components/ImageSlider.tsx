import { useState } from 'react';
import { CaretLeftIcon } from './icons/CaretLeftIcon.tsx';
import { CaretRightIcon } from './icons/CaretRightIcon.tsx';
import { images } from '../data.ts';
import { useAuth } from '../hooks/queries/useAuth.ts';
import johnnyImg from '../assets/johnny.webp';
import johnnyImgMobile from '../assets/johnny-mobile.jpg';

export const ImageSlider = () => {
  const { userAuth, isPending } = useAuth(false);
  const [imageIndex, setImageIndex] = useState(0);

  function handlePrevImage() {
    setImageIndex(currIndex =>
      currIndex === 0 ? images.length - 1 : currIndex - 1
    );
  }

  function handleNextImage() {
    setImageIndex(currIndex =>
      currIndex === images.length - 1 ? 0 : currIndex + 1
    );
  }

  return (
    <div className="h-[65vh] sm:h-[85vh] w-full flex overflow-clip relative">
      {userAuth && (
        <>
          <img
            src={johnnyImg}
            alt="Johnny Silverhand"
            className="object-cover aspect-video h-full flex-shrink-0 flex-grow-0 w-full duration-500 ease-in-out brightness-animation bg-black z-[-1] hidden sm:inline-block"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
          <img
            src={johnnyImgMobile}
            alt="Johnny Silverhand Mobile"
            className="object-cover aspect-video h-full flex-shrink-0 flex-grow-0 w-full duration-500 ease-in-out brightness-animation bg-black z-[-1] sm:hidden"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        </>
      )}
      {isPending && (
        <div className="object-cover bg-black aspect-video h-full flex-shrink-0 flex-grow-0 w-full z-[-1]"></div>
      )}
      {!isPending &&
        images.map(image => (
          <img
            key={image.id}
            src={image.img}
            alt={image.alt}
            className="object-cover aspect-video h-full flex-shrink-0 flex-grow-0 w-full duration-500 ease-in-out z-[-1]"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      <div className="absolute w-full h-full flex justify-between items-end pb-6 sm:pb-0 sm:items-center sm:px-5">
        <button
          className="p-3 rounded-md bg-transparent text-white hover:text-primary active:text-white duration-200"
          aria-label="passar para imagem da esquerda"
          onClick={handlePrevImage}
        >
          <CaretLeftIcon />
        </button>
        <button
          className="p-3 rounded-md bg-transparent text-white hover:text-primary active:text-white duration-200"
          aria-label="passar para a próxima imagem"
          onClick={handleNextImage}
        >
          <CaretRightIcon />
        </button>
      </div>
      <div className="grid top-0 left-0 right-0 bottom-0 items-end h-full max-container w-full absolute font-merry z-[-1] padding-x ">
        <div className="max-container w-full padding-y">
          <div className="text-slate-100 font-medium text-2xl sm:text-4xl flex justify-end pb-2 animate-[opacity_0.5s_ease-in-out_backwards] txt-shadow">
            Hand's On
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light flex justify-end text-white pb-4 sm:pb-0 animate-[opacity_0.5s_0.3s_ease-in-out_backwards] txt-shadow">
            <div>
              Silver
              <span className="text-primary">Hand</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};
