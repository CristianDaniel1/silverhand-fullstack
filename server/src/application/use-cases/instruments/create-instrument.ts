import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';
import { CreateInstrumentDto } from './dtos/create-Instrument.dto';

export interface CreateInstrumentUseCase {
  execute(dto: CreateInstrumentDto): Promise<InstrumentEntity>;
}

export class CreateInstrument implements CreateInstrumentUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(dto: CreateInstrumentDto): Promise<InstrumentEntity> {
    return this.repository.create(dto);
  }
}
