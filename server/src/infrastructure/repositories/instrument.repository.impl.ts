import { CreateInstrumentDto } from '../../application/instruments/dtos/create-Instrument.dto';
import { PaginationDto } from '../../application/instruments/dtos/pagination.dto';
import { UpdateInstrumentDto } from '../../application/instruments/dtos/update-instrument.dto';
import { InstrumentDatasource } from '../../domain/datasources/instrument.datasource';
import { InstrumentEntity } from '../../domain/entities/instrument.entity';
import { InstrumentRepository } from '../../domain/repositories/instrument.repository';
import { PaginationResponseDto } from '../../application/instruments/dtos/pagination-response.dto';

export class InstrumentRepositoryImpl implements InstrumentRepository {
  constructor(private readonly datasource: InstrumentDatasource) {}

  create(createInstrumentDto: CreateInstrumentDto): Promise<InstrumentEntity> {
    return this.datasource.create(createInstrumentDto);
  }
  getAll(
    paginationDto: PaginationDto
  ): Promise<PaginationResponseDto<InstrumentEntity>> {
    return this.datasource.getAll(paginationDto);
  }
  findById(id: number): Promise<InstrumentEntity> {
    return this.datasource.findById(id);
  }
  updateById(
    updateInstrumentDto: UpdateInstrumentDto
  ): Promise<InstrumentEntity> {
    return this.datasource.updateById(updateInstrumentDto);
  }
  deleteById(id: number): Promise<InstrumentEntity> {
    return this.datasource.deleteById(id);
  }
}
