import { CreateInstrumentDto } from '../../application/use-cases/instruments/dtos/create-Instrument.dto';
import { UpdateInstrumentDto } from '../../application/use-cases/instruments/dtos/update-instrument.dto';
import { InstrumentEntity } from '../entities/instrument.entity';

export abstract class InstrumentRepository {
  abstract create(
    createInstrumentDto: CreateInstrumentDto
  ): Promise<InstrumentEntity>;
  abstract getAll(): Promise<InstrumentEntity[]>;
  abstract findById(id: number): Promise<InstrumentEntity>;
  abstract updateById(
    updateInstrumentDto: UpdateInstrumentDto
  ): Promise<InstrumentEntity>;
  abstract deleteById(id: number): Promise<InstrumentEntity>;
}
