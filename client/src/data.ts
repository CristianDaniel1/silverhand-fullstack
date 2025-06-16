import img1 from './assets/playing-guitar.webp';
import img2 from './assets/playing-guitar-2.webp';
import img3 from './assets/guitar-img-1.webp';
import img4 from './assets/guitar-img-2.webp';

export const strings = [6, 5, 4];

export const categories = ['todas', 'guitarra', 'contrabaixo', 'violão'];

export const images = [
  {
    id: 1,
    img: img1,
    alt: 'Primeira imagem do slide',
  },
  {
    id: 2,
    img: img2,
    alt: 'Segunda imagem do slide',
  },
  {
    id: 3,
    img: img3,
    alt: 'Terceira imagem do slide',
  },
  {
    id: 4,
    img: img4,
    alt: 'Quarta imagem do slide',
  },
];

export const statusObj = {
  COMPLETED: 'Completado',
  PENDING: 'Em Andamento',
  CANCELED: 'Cancelado',
  RETURNED: 'Devolvido',
};

export const categoriesObj: { [key: string]: string } = {
  todas: 'todas',
  guitarra: 'guitarra',
  contrabaixo: 'contrabaixo',
  violao: 'violão',
};
