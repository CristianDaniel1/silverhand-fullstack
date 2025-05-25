import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';

export interface GetInstrumentUseCase {
  execute(id: number): Promise<InstrumentEntity>;
}

export class GetInstrument implements GetInstrumentUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(id: number): Promise<InstrumentEntity> {
    return this.repository.findById(id);
  }
}
