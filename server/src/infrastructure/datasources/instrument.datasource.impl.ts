import { CreateInstrumentDto } from '../../application/instruments/dtos/create-Instrument.dto';
import { PaginationDto } from '../../application/instruments/dtos/pagination.dto';
import { UpdateInstrumentDto } from '../../application/instruments/dtos/update-instrument.dto';
import { prisma } from '../../data/postgres';
import { InstrumentDatasource } from '../../domain/datasources/instrument.datasource';
import { InstrumentEntity } from '../../domain/entities/instrument.entity';
import { PaginationResponseDto } from '../../application/instruments/dtos/pagination-response.dto';
import { CustomError } from '../../shared/errors/custom.error';

export class InstrumentDatasourceImpl implements InstrumentDatasource {
  async create(
    createInstrumentDto: CreateInstrumentDto
  ): Promise<InstrumentEntity> {
    const instrumentExists = await prisma.instrument.findFirst({
      where: { name: createInstrumentDto.name },
    });

    if (instrumentExists)
      throw CustomError.conflict(
        `O instrumento com o nome ${createInstrumentDto.name} já existe`
      );

    const instrument = await prisma.instrument.create({
      data: createInstrumentDto,
    });

    return InstrumentEntity.fromObject(instrument);
  }

  async getAll(
    paginationDto: PaginationDto
  ): Promise<PaginationResponseDto<InstrumentEntity>> {
    const { page, limit } = paginationDto;

    const where = paginationDto.category
      ? { category: paginationDto.category }
      : undefined;

    const [instruments, total] = await Promise.all([
      prisma.instrument.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where,
      }),
      prisma.instrument.count({ where }),
    ]);

    const lastPage = Math.ceil(total / limit);

    const instrumentsData = instruments.map(instrument =>
      InstrumentEntity.fromObject(instrument)
    );

    return {
      page,
      limit,
      total,
      lastPage,
      hasNextPage: page < lastPage,
      hasPreviousPage: page > 1,
      instruments: instrumentsData,
    };
  }

  async findById(id: number): Promise<InstrumentEntity> {
    const instrument = await prisma.instrument.findFirst({
      where: { id },
    });

    if (!instrument)
      throw CustomError.notFound(`Instrumento com id ${id} não foi encontrado`);

    return InstrumentEntity.fromObject(instrument);
  }

  async updateById(
    updateInstrumentDto: UpdateInstrumentDto
  ): Promise<InstrumentEntity> {
    const { id, values } = updateInstrumentDto;

    const instrument = await this.findById(id);

    if (values.name && instrument.name !== values.name) {
      const existing = await prisma.instrument.findUnique({
        where: { name: values.name as string },
      });

      if (existing) {
        throw CustomError.conflict(
          `Já existe um instrumento com o nome ${updateInstrumentDto.name}, o nome precisa ser único`
        );
      }
    }

    const updatedInstrument = await prisma.instrument.update({
      where: { id: updateInstrumentDto.id },
      data: values,
    });
    return InstrumentEntity.fromObject(updatedInstrument);
  }

  async deleteById(id: number): Promise<InstrumentEntity> {
    await this.findById(id);

    const deleted = await prisma.instrument.delete({
      where: { id },
    });

    return InstrumentEntity.fromObject(deleted);
  }
}
