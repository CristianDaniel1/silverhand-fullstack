import { useState } from 'react';
import { CaretLeftIcon } from './icons/CaretLeftIcon.tsx';
import { CaretRightIcon } from './icons/CaretRightIcon.tsx';
import { images } from '../data.ts';

export const ImageSlider = () => {
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
      {images.map(image => (
        <img
          key={image.id}
          src={image.img}
          alt={image.alt}
          width={616}
          height={616}
          className="object-cover h-full flex-shrink-0 flex-grow-0 w-full duration-500 ease-in-out"
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
    </div>
  );
};
