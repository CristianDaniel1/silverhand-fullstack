import { Category } from '../../../../domain/entities/instrument.entity';

export class CreateInstrumentDto {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly stringNum: number,
    public readonly quant: number,
    public readonly category: Category,
    public readonly image?: string
  ) {}

  static create(props: { [key: string]: any }): CreateInstrumentDto {
    return new CreateInstrumentDto(
      props.name,
      props.price,
      props.stringNum,
      props.quant,
      props.category as Category,
      props.image
    );
  }
}
