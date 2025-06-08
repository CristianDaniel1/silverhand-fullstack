import { Category } from '../../../domain/entities/instrument.entity';

export class UpdateInstrumentDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly price?: number,
    public readonly stringNum?: number,
    public readonly quant?: number,
    public readonly category?: Category,
    public readonly image?: string
  ) {}

  get values() {
    const obj = {
      name: this.name,
      price: this.price,
      stringNum: this.stringNum,
      quant: this.quant,
      category: this.category,
      image: this.image,
    };

    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined && v !== null)
    );
  }

  static create(props: { [key: string]: any }): UpdateInstrumentDto {
    const { id, name, price, stringNum, quant, category, image } = props;

    return new UpdateInstrumentDto(
      id,
      name,
      price,
      stringNum,
      quant,
      category?.toUpperCase() as Category,
      image
    );
  }
}
