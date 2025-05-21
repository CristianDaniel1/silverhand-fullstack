import { type Instrument } from './types';

import guitarFenderStratocasterHSS from './assets/guitars/guitarra-Fender-Stratocaster-Player-II-HSS.webp';
import guitarFenderStratocaster from './assets/guitars/guitarra-fender-stratocaster.webp';
import guitarPRSSENF3Maple from './assets/guitars/guitarra-PRS-SE-NF3-Maple.webp';
import guitarTagimaJazzMaster from './assets/guitars/guitarra-Tagima-Jazz-Master-TW-60.webp';
import guitarTagimaWoodstock from './assets/guitars/guitarra-tagima-Woodstock-TW-55.webp';
import guitarFenderJazzmaster from './assets/guitars/guitarra-Fender-Jazzmaster-Player-II.webp';

import doubleBassSquierJazzBassVAffinity from './assets/double-bass/contrabaixo-Squier-Jazz-Bass-V-Affinity.webp';
import doubleBassSquierPrecisionBassDebut from './assets/double-bass/Contrabaixo-Squier-Precision-Bass-Debut.webp';
import doubleBassSquierYamahaBB234 from './assets/double-bass/Contrabaixo-Yamaha-BB234.webp';
import doubleBassSpector5CordasLegend from './assets/double-bass/Contrabaixo-Spector 5-Cordas-Legend-LG5S.webp';

import acousticGuitarGEWAClassicNylonStudent from './assets/acousticGuitars/violão-GEWA-Clássico-Acústico-Nylon-Student.webp';
import acousticGuitarRoziniNylonJoao from './assets/acousticGuitars/violão-Rozini-Acústico-Nylon-João-Violão.webp';
import acousticGuitarSigmaClassicNylonCM2 from './assets/acousticGuitars/Violão-Sigma-Clássico-Nylon-CM-2-Tampo-de-Cedro-Macico.webp';
import acousticGuitarNylonYamahaC80II from './assets/acousticGuitars/Violão-Clássico-Nylon-Yamaha-C80II-Spruce-Natural-Gloss.webp';

import img1 from './assets/playing-guitar.webp';
import img2 from './assets/playing-guitar-2.webp';
import img3 from './assets/guitar-img-1.webp';
import img4 from './assets/guitar-img-2.webp';

export const instruments: Instrument[] = [
  {
    id: 'guitarra-fender-stratocaster-player-ii-hss-transparent-cherry-Burst',
    name: 'Guitarra Fender Stratocaster Player II HSS - Transparent Cherry Burst',
    price: 10431.0,
    stringNum: 6,
    quant: 22,
    image: guitarFenderStratocasterHSS,
    category: 'guitarra',
  },
  {
    id: 'guitarra-prs-se-nf3-maple-metallic-orange',
    name: 'Guitarra PRS SE NF3 Maple - Metallic Orange',
    price: 11168.28,
    stringNum: 6,
    quant: 16,
    image: guitarPRSSENF3Maple,
    category: 'guitarra',
  },
  {
    id: 'guitarra-fender-stratocaster-player-ii-aged-cherry-burst',
    name: 'Guitarra Fender Stratocaster Player II - Aged Cherry Burst',
    price: 9891.0,
    stringNum: 6,
    quant: 44,
    image: guitarFenderStratocaster,
    category: 'guitarra',
  },
  {
    id: 'guitarra-tagima-jazz-master-tw-60-metallic-deep-silver',
    name: 'Guitarra Tagima Jazz Master TW-60 - Metallic Deep Silver',
    price: 1385.1,
    stringNum: 6,
    quant: 24,
    image: guitarTagimaJazzMaster,
    category: 'guitarra',
  },
  {
    id: 'contrabaixo-squier-jazz-bass-v-affinity-5-cordas-sunburst',
    name: 'Contrabaixo Squier Jazz Bass V Affinity 5 Cordas - Sunburst',
    price: 3644.1,
    stringNum: 5,
    quant: 27,
    image: doubleBassSquierJazzBassVAffinity,
    category: 'contrabaixo',
  },
  {
    id: 'violao-gewa-classico-acustico-nylon-student-vg500-140',
    name: 'Violão GEWA Clássico Acústico Nylon Student VG500.140',
    price: 801.0,
    stringNum: 6,
    quant: 50,
    image: acousticGuitarGEWAClassicNylonStudent,
    category: 'violão',
  },
  {
    id: 'Guitarra Tagima Woodstock TW-55 - Preta',
    name: 'Guitarra Tagima Woodstock TW-55 - Preta',
    price: 1340.1,
    stringNum: 6,
    quant: 22,
    image: guitarTagimaWoodstock,
    category: 'guitarra',
  },
  {
    id: 'Guitarra Fender Jazzmaster Player II - 3-Color Sunburst',
    name: 'Guitarra Fender Jazzmaster Player II - 3-Color Sunburst',
    price: 9891.0,
    stringNum: 6,
    quant: 15,
    image: guitarFenderJazzmaster,
    category: 'guitarra',
  },
  {
    id: 'Violão Rozini Acústico Nylon João Violão RX209ACFCD',
    name: 'Violão Rozini Acústico Nylon João Violão RX209ACFCD',
    price: 1259.1,
    stringNum: 6,
    quant: 34,
    image: acousticGuitarRoziniNylonJoao,
    category: 'violão',
  },
  {
    id: 'Violão Sigma Clássico Nylon CM-2 Tampo de Cedro Maciço',
    name: 'Violão Sigma Clássico Nylon CM-2 Tampo de Cedro Maciço',
    price: 2861.1,
    stringNum: 6,
    quant: 24,
    image: acousticGuitarSigmaClassicNylonCM2,
    category: 'violão',
  },
  {
    id: 'Violão Clássico Nylon Yamaha C80 II Spruce Natural Gloss',
    name: 'Violão Clássico Nylon Yamaha C80 II Spruce Natural Gloss',
    price: 1403.1,
    stringNum: 6,
    quant: 24,
    image: acousticGuitarNylonYamahaC80II,
    category: 'violão',
  },
  {
    id: 'Contrabaixo Squier Precision Bass Debut - Dakota Red',
    name: 'Contrabaixo Squier Precision Bass Debut - Dakota Red',
    price: 1799.1,
    stringNum: 4,
    quant: 27,
    image: doubleBassSquierPrecisionBassDebut,
    category: 'contrabaixo',
  },
  {
    id: 'Contrabaixo Yamaha BB234 - Raspberry Red',
    name: 'Contrabaixo Yamaha BB234 - Raspberry Red',
    price: 3411.0,
    stringNum: 4,
    quant: 20,
    image: doubleBassSquierYamahaBB234,
    category: 'contrabaixo',
  },
  {
    id: 'Contrabaixo Spector 5 Cordas Legend LG5S - Black Cherry',
    name: 'Contrabaixo Spector 5 Cordas Legend LG5S - Black Cherry',
    price: 3411.0,
    stringNum: 5,
    quant: 22,
    image: doubleBassSpector5CordasLegend,
    category: 'contrabaixo',
  },
];

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
