type User = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  zipCode: string;
  address: string;
  phoneNumber?: string | undefined;
  profilePic?: string | undefined;
  role?: 'ADMIN_ROLE' | 'USER_ROLE' | undefined;
};

type InstrumentCategory = 'GUITARRA' | 'CONTRABAIXO' | 'VIOLAO';

type Instrument = {
  name: string;
  price: number;
  stringNum: number;
  quant: number;
  category: InstrumentCategory;
  image: string;
};

export const usersData: User[] = [
  {
    name: 'Cristian Daniel',
    email: 'cris@silverhand.com',
    cpf: '12345678942',
    phoneNumber: '11987654321',
    password: '123456',
    zipCode: '01311000',
    address: 'Rua Barraquinha, 123 - São Paulo/SP',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Johnny Silverhand',
    email: 'sh.silverhand@gmail.com',
    cpf: '12345678902',
    phoneNumber: '11987654321',
    password: '123456',
    zipCode: '01311000',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo/SP',
    profilePic:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750129481/hpj5m6lkzszg9xyayyk4.jpg',
    role: 'ADMIN_ROLE',
  },
  {
    name: 'Ana Carolina Silva',
    email: 'ana.carolina@email.com',
    cpf: '12345678901',
    phoneNumber: '11987654321',
    password: 'SenhaSegura123!',
    zipCode: '01311000',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo/SP',
    profilePic: '',
    role: 'ADMIN_ROLE',
  },
  {
    name: 'Carlos Eduardo Santos',
    email: 'carlos.santos@email.com',
    cpf: '98765432109',
    phoneNumber: '21998765432',
    password: 'OutraSenha456@',
    zipCode: '20040002',
    address: 'Rua da Carioca, 50 - Centro, Rio de Janeiro/RJ',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Mariana Oliveira Costa',
    email: 'mariana.oliveira@email.com',
    cpf: '45678912345',
    phoneNumber: '31987654321',
    password: 'Mariana123$',
    zipCode: '30130005',
    address: 'Av. Afonso Pena, 2000 - Centro, Belo Horizonte/MG',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Pedro Henrique Almeida',
    email: 'pedro.almeida@email.com',
    cpf: '78912345678',
    phoneNumber: '41998765432',
    password: 'PedroAlmeida789!',
    zipCode: '80010000',
    address: 'Rua XV de Novembro, 100 - Centro, Curitiba/PR',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Juliana Pereira Martins',
    email: 'juliana.martins@email.com',
    cpf: '32165498732',
    phoneNumber: '51987654321',
    password: 'JulianaMartins321#',
    zipCode: '90010001',
    address: 'Rua dos Andradas, 500 - Centro Histórico, Porto Alegre/RS',
    profilePic: '',
    role: 'ADMIN_ROLE',
  },
  {
    name: 'Ricardo Souza Lima',
    email: 'ricardo.lima@email.com',
    cpf: '65498732165',
    phoneNumber: '61998765432',
    password: 'RicardoLima654$',
    zipCode: '70040900',
    address: 'Setor Comercial Sul, Quadra 2 - Asa Sul, Brasília/DF',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Fernanda Gomes Ribeiro',
    email: 'fernanda.ribeiro@email.com',
    cpf: '14725836914',
    phoneNumber: '71987654321',
    password: 'FernandaRibeiro147!',
    zipCode: '40010010',
    address: 'Av. Sete de Setembro, 100 - Dois de Julho, Salvador/BA',
    profilePic: '',
    role: 'USER_ROLE',
  },
  {
    name: 'Lucas Mendes Barbosa',
    email: 'lucas.barbosa@email.com',
    cpf: '25836914725',
    phoneNumber: '81998765432',
    password: 'LucasBarbosa258@',
    zipCode: '50010000',
    address: 'Rua do Bom Jesus, 50 - Recife Antigo, Recife/PE',
    profilePic: '',
    role: 'USER_ROLE',
  },
];

export const instrumentsData: Instrument[] = [
  {
    name: 'Guitarra Fender Stratocaster Player II HSS - Transparent Cherry Burst',
    price: 10431.0,
    stringNum: 6,
    quant: 22,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-Fender-Stratocaster-Player-II-HSS_eia13z.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra PRS SE NF3 Maple - Metallic Orange',
    price: 11168.28,
    stringNum: 6,
    quant: 16,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-PRS-SE-NF3-Maple_dzqaqy.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Fender Stratocaster Player II - Aged Cherry Burst',
    price: 9891.0,
    stringNum: 6,
    quant: 44,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-fender-stratocaster_opjjyr.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Tagima Jazz Master TW-60 - Metallic Deep Silver',
    price: 1385.1,
    stringNum: 6,
    quant: 24,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-Tagima-Jazz-Master-TW-60_c9tli9.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Contrabaixo Squier Jazz Bass V Affinity 5 Cordas - Sunburst',
    price: 3644.1,
    stringNum: 5,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042003/contrabaixo-Squier-Jazz-Bass-V-Affinity_gpzaic.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Violão GEWA Clássico Acústico Nylon Student VG500.140',
    price: 801.0,
    stringNum: 6,
    quant: 50,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042124/viol%C3%A3o-GEWA-Cl%C3%A1ssico-Ac%C3%BAstico-Nylon-Student_ydrf9u.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Guitarra Tagima Woodstock TW-55 - Preta',
    price: 1340.1,
    stringNum: 6,
    quant: 22,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-tagima-Woodstock-TW-55_cy6jxk.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Fender Jazzmaster Player II - 3-Color Sunburst',
    price: 9891.0,
    stringNum: 6,
    quant: 15,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750041617/guitarra-Fender-Jazzmaster-Player-II_kxgkii.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Violão Rozini Acústico Nylon João Violão RX209ACFCD',
    price: 1259.1,
    stringNum: 6,
    quant: 34,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042124/viol%C3%A3o-Rozini-Ac%C3%BAstico-Nylon-Jo%C3%A3o-Viol%C3%A3o_lwdxck.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Sigma Clássico Nylon CM-2 Tampo de Cedro Maciço',
    price: 2861.1,
    stringNum: 6,
    quant: 24,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042127/Viol%C3%A3o-Sigma-Cl%C3%A1ssico-Nylon-CM-2-Tampo-de-Cedro-Macico_uyi7rc.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Clássico Nylon Yamaha C80 II Spruce Natural Gloss',
    price: 1403.1,
    stringNum: 6,
    quant: 24,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042124/Viol%C3%A3o-Cl%C3%A1ssico-Nylon-Yamaha-C80II-Spruce-Natural-Gloss_gl5m8t.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Contrabaixo Squier Precision Bass Debut - Dakota Red',
    price: 1799.1,
    stringNum: 4,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042003/Contrabaixo-Squier-Precision-Bass-Debut_hitza9.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Yamaha BB234 - Raspberry Red',
    price: 3411.0,
    stringNum: 4,
    quant: 20,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042003/Contrabaixo-Yamaha-BB234_p5xntt.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Spector 5 Cordas Legend LG5S - Black Cherry',
    price: 3411.0,
    stringNum: 5,
    quant: 22,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750042003/Contrabaixo-Spector_5-Cordas-Legend-LG5S_k14zpr.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Guitarra Fender Telecaster Player II - Butterscotch Blonde',
    price: 10071.0,
    stringNum: 6,
    quant: 54,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750125843/Guitarra_Fender_Telecaster_Player_II_-_Butterscotch_Blonde_llqaqb.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Charvel So-Cal Pro-Mod Style 1 HSS FR E - Vermelha',
    price: 11241.0,
    stringNum: 6,
    quant: 45,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750125921/Guitarra_Charvel_So-Cal_Pro-Mod_Style_1_HSS_FR_E_-_Vermelha_zhju0t.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5420T - Orange Stain',
    price: 8091.0,
    stringNum: 6,
    quant: 35,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126059/Guitarra_Gretsch_Electromatic_Bigsby_Semi-Ac%C3%BAstica_G5420T_-_Orange_Stain_zq4vv0.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Yamaha Pacifica PAC612 VIIX - Teal Green',
    price: 6740.1,
    stringNum: 6,
    quant: 35,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126218/Guitarra_Yamaha_Pacifica_PAC612_VIIX_-_Teal_Green_ooep6o.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Contrabaixo Squier Jazz Bass Classic Vibe 70s - Natural',
    price: 5661.0,
    stringNum: 4,
    quant: 22,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126389/Contrabaixo_Squier_Jazz_Bass_Classic_Vibe_70s_-_Natural_lxgrcm.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Spector 5 Cordas Performer PERF5 - Branco',
    price: 4553.1,
    stringNum: 5,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126576/Contrabaixo_Spector_5_Cordas_Performer_PERF5_-_Branco_nbqg5d.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Yamaha 5 Cordas TRBX505 - Brick Burst',
    price: 5219.1,
    stringNum: 5,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126679/Contrabaixo_Yamaha_5_Cordas_TRBX505_-_Brick_Burst_tjvldn.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Spector Performer PERF4 - Preto',
    price: 4274.1,
    stringNum: 4,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126775/Contrabaixo_Spector_Performer_PERF4_-_Preto_bafn8h.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Fender Precision Bass American Professional II - Mercury',
    price: 22491.0,
    stringNum: 4,
    quant: 27,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126885/Contrabaixo_Fender_Precision_Bass_American_Professional_II_-_Mercury_hwjxr2.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Contrabaixo Fender Precision Bass Deluxe Duff McKagan Signature - White Pearl',
    price: 17091.0,
    stringNum: 4,
    quant: 32,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750126984/Contrabaixo_Fender_Precision_Bass_Deluxe_Duff_McKagan_Signature_-_White_Pearl_aat8b5.webp',
    category: 'CONTRABAIXO',
  },
  {
    name: 'Violão Godin Eletroacústico Aço Entourage - Burgundy',
    price: 8270.1,
    stringNum: 6,
    quant: 32,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127142/Viol%C3%A3o_Godin_Eletroac%C3%BAstico_A%C3%A7o_Entourage_-_Burgundy_zgm3a8.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Martin Eletroacústico Aço GPC-13E Captação Martin E-1 com Capa',
    price: 18891.1,
    stringNum: 6,
    quant: 32,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127250/Viol%C3%A3o_Martin_Eletroac%C3%BAstico_A%C3%A7o_GPC-13E_Capta%C3%A7%C3%A3o_Martin_E-1_com_Capa_ghqmqw.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Sigma Eletroacústico Aço GME',
    price: 2871.0,
    stringNum: 6,
    quant: 32,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127414/Viol%C3%A3o_Sigma_Eletroac%C3%BAstico_A%C3%A7o_GME_pocabn.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Sigma Travel Guitar Eletroacústico Aço TM-15E com Capa',
    price: 3869.1,
    stringNum: 6,
    quant: 32,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127485/Viol%C3%A3o_Sigma_Travel_Guitar_Eletroac%C3%BAstico_A%C3%A7o_TM-15E_com_Capa_bayasz.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Sigma Eletroacústico Aço GJME Grand Jumbo',
    price: 3149.1,
    stringNum: 6,
    quant: 35,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127558/Viol%C3%A3o_Sigma_Eletroac%C3%BAstico_A%C3%A7o_GJME_Grand_Jumbo_ub1w77.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Violão Tagima Eletroacústico Aço Rio Negro - Natural Amber Satin',
    price: 1160.1,
    stringNum: 6,
    quant: 35,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127681/Viol%C3%A3o_Tagima_Eletroac%C3%BAstico_A%C3%A7o_Rio_Negro_-_Natural_Amber_Satin_kpgtod.webp',
    category: 'VIOLAO',
  },
  {
    name: 'Guitarra Fender Stratocaster Eric Clapton Signature - Olympic White',
    price: 26991.0,
    stringNum: 6,
    quant: 23,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127820/Guitarra_Fender_Stratocaster_Eric_Clapton_Signature_-_Olympic_White_jy2hpd.webp',
    category: 'GUITARRA',
  },
  {
    name: 'Guitarra Fender Stratocaster Player II HSS - Polar White',
    price: 10431.0,
    stringNum: 6,
    quant: 28,
    image:
      'https://res.cloudinary.com/dlqnorek4/image/upload/v1750127951/Guitarra_Fender_Stratocaster_Player_II_HSS_-_Polar_White_lyrxez.webp',
    category: 'GUITARRA',
  },
];
