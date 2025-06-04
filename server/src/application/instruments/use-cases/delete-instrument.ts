import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';

export interface DeleteInstrumentUseCase {
  execute(id: number): Promise<InstrumentEntity>;
}

export class DeleteInstrument implements DeleteInstrumentUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(id: number): Promise<InstrumentEntity> {
    return this.repository.deleteById(id);
  }
}
