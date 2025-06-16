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
    name: 'Ana Carolina Silva',
    email: 'ana.carolina@email.com',
    cpf: '12345678901',
    phoneNumber: '11987654321',
    password: 'SenhaSegura123!',
    zipCode: '01311000',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo/SP',
    profilePic: 'https://example.com/profiles/ana.jpg',
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
    profilePic: 'https://example.com/profiles/carlos.jpg',
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
    profilePic: 'https://example.com/profiles/mariana.jpg',
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
    profilePic: 'https://example.com/profiles/pedro.jpg',
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
    profilePic: 'https://example.com/profiles/juliana.jpg',
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
    profilePic: 'https://example.com/profiles/ricardo.jpg',
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
    profilePic: 'https://example.com/profiles/fernanda.jpg',
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
    profilePic: 'https://example.com/profiles/lucas.jpg',
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
];
