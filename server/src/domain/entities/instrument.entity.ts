export enum Category {
  GUITARRA = 'guitarra',
  CONTRABAIXO = 'contrabaixo',
  VIOLAO = 'violao',
}

export class InstrumentEntity {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stringNum: number,
    public quant: number,
    public category: Category,
    public image?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): InstrumentEntity {
    const { id, name, price, stringNum, quant, category, image } = object;

    if (price < 0) throw new Error('Preço não pode ser negativo');
    if (stringNum <= 0) throw new Error('Número de cordas inválido');

    return new InstrumentEntity(
      id,
      name,
      price,
      stringNum,
      quant,
      category,
      image
    );
  }
}
