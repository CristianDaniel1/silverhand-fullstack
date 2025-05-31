import { CreateInstrumentDto } from '../../application/instruments/dtos/create-Instrument.dto';
import { PaginationDto } from '../../application/instruments/dtos/pagination.dto';
import { UpdateInstrumentDto } from '../../application/instruments/dtos/update-instrument.dto';
import { PaginationResponseDto } from '../../presentation/instruments/dtos/pagination-response.dto';
import { InstrumentEntity } from '../entities/instrument.entity';

export abstract class InstrumentRepository {
  abstract create(
    createInstrumentDto: CreateInstrumentDto
  ): Promise<InstrumentEntity>;
  abstract getAll(
    paginationDto: PaginationDto
  ): Promise<PaginationResponseDto<InstrumentEntity>>;
  abstract findById(id: number): Promise<InstrumentEntity>;
  abstract updateById(
    updateInstrumentDto: UpdateInstrumentDto
  ): Promise<InstrumentEntity>;
  abstract deleteById(id: number): Promise<InstrumentEntity>;
}
