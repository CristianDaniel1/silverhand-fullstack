import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';
import { UpdateInstrumentDto } from '../dtos/update-instrument.dto';

export interface UpdateInstrumentUseCase {
  execute(dto: UpdateInstrumentDto): Promise<InstrumentEntity>;
}

export class UpdateInstrument implements UpdateInstrumentUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(dto: UpdateInstrumentDto): Promise<InstrumentEntity> {
    return this.repository.updateById(dto);
  }
}
