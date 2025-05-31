import { InstrumentEntity } from '../../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../../domain/repositories/instrument.repository';
import { PaginationResponseDto } from '../../../presentation/instruments/dtos/pagination-response.dto';
import { PaginationDto } from '../dtos/pagination.dto';

export interface GetInstrumentsUseCase {
  execute(
    paginationDto: PaginationDto
  ): Promise<PaginationResponseDto<InstrumentEntity>>;
}

export class GetInstruments implements GetInstrumentsUseCase {
  constructor(private readonly repository: InstrumentRepository) {}

  execute(
    paginationDto: PaginationDto
  ): Promise<PaginationResponseDto<InstrumentEntity>> {
    return this.repository.getAll(paginationDto);
  }
}
