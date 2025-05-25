import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';

export interface GetInstrumentsUseCase {
  execute(): Promise<InstrumentEntity[]>;
}

export class GetInstruments implements GetInstrumentsUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(): Promise<InstrumentEntity[]> {
    return this.repository.getAll();
  }
}
