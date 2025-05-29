import { Decimal } from '../../../generated/prisma/runtime/library';
import { CustomError } from '../../shared/errors/custom.error';

export enum Category {
  GUITARRA = 'guitarra',
  CONTRABAIXO = 'contrabaixo',
  VIOLAO = 'violao',
}

export class InstrumentEntity {
  constructor(
    public id: number,
    public name: string,
    public price: Decimal,
    public stringNum: number,
    public quant: number,
    public category: Category,
    public image?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): InstrumentEntity {
    const { id, name, price, stringNum, quant, category, image } = object;

    if (price < 0)
      CustomError.unprocessableEntity('Preço não pode ser negativo');
    if (stringNum <= 0)
      CustomError.unprocessableEntity('Número de cordas inválido');

    return new InstrumentEntity(
      id,
      name,
      new Decimal(price),
      stringNum,
      quant,
      category,
      image
    );
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price.toNumber(),
      stringNum: this.stringNum,
      quant: this.quant,
      category: this.category,
      image: this.image,
    };
  }
}
