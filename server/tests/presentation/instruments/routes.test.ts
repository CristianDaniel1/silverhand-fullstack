import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';

type InstrumentCateg = 'guitarra' | 'contrabaixo' | 'violao';

type Instrument = {
  name: string;
  price: number;
  stringNum: number;
  quant: number;
  image: string;
  category: InstrumentCateg;
};

describe('Instrument route testing', () => {
  beforeAll(async () => {
    await testServer.start();
  });

  afterAll(() => {
    testServer.close();
  });

  beforeEach(async () => {
    await prisma.instrument.deleteMany();
  });

  const instrument1: Instrument = {
    name: 'Violão Nylon Clássico',
    price: 899.0,
    stringNum: 6,
    quant: 12,
    image: 'https://example.com/images/violao.jpg',
    category: 'violao',
  };

  const instrument2: Instrument = {
    name: 'Jazz Bass Pro',
    price: 3199.5,
    stringNum: 4,
    quant: 5,
    image: 'https://example.com/images/jazzbass.jpg',
    category: 'contrabaixo',
  };

  test('should return INSTRUMENTs silverhand/api/instruments', async () => {
    await prisma.instrument.createMany({
      data: [instrument1, instrument2],
    });

    const { body } = await request(testServer.app)
      .get('/silverhand/api/instruments')
      .expect(200);

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBe(2);
    expect(body[0].name).toBe(instrument1.name);
    expect(body[1].name).toBe(instrument2.name);
    expect(body[0].stringNum).toBe(instrument1.stringNum);
  });

  test('should return a INSTRUMENT silverhand/api/instruments/:id', async () => {
    const instrument = await prisma.instrument.create({ data: instrument1 });

    const { body } = await request(testServer.app)
      .get(`/silverhand/api/instruments/${instrument.id}`)
      .expect(200);

    expect(body).toEqual({
      id: instrument.id,
      name: instrument.name,
      price: Number(instrument.price),
      stringNum: instrument.stringNum,
      quant: instrument.quant,
      image: instrument.image,
      category: instrument.category,
    });
  });

  test('should return a 404 NotFound silverhand/api/instruments/:id', async () => {
    const instrumentId = 777;

    const { body } = await request(testServer.app)
      .get(`/silverhand/api/instruments/${instrumentId}`)
      .expect(404);

    expect(body).toEqual({
      error: `Instrumento com id ${instrumentId} não foi encontrado`,
    });
  });

  test('should return a new Instrument silverhand/api/instruments', async () => {
    const { body } = await request(testServer.app)
      .post('/silverhand/api/instruments')
      .send(instrument1)
      .expect(201);

    expect(body).toEqual({
      id: expect.any(Number),
      name: instrument1.name,
      price: Number(instrument1.price),
      stringNum: instrument1.stringNum,
      quant: instrument1.quant,
      image: instrument1.image,
      category: instrument1.category,
    });
  });

  test('should return an error if only name is present silverhand/api/instruments', async () => {
    const { body } = await request(testServer.app)
      .post('/silverhand/api/instruments')
      .send({ name: 'Teste' })
      .expect(400);

    expect(body).toEqual({
      errors: [
        'Price is required',
        'stringNum is required',
        'Quantity is required',
        'Category is required',
      ],
      message: 'Erro ao validar os dados',
    });
  });

  test('should return an error if body is empty silverhand/api/instruments', async () => {
    const { body } = await request(testServer.app)
      .post('/silverhand/api/instruments')
      .send({})
      .expect(400);

    expect(body).toEqual({
      errors: [
        'Name is required',
        'Price is required',
        'stringNum is required',
        'Quantity is required',
        'Category is required',
      ],
      message: 'Erro ao validar os dados',
    });
  });
});
