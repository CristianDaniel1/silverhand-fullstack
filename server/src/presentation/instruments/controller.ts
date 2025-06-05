import { Request, Response } from 'express';
import { CreateInstrumentDto } from '../../application/instruments/dtos/create-Instrument.dto';
import { UpdateInstrumentDto } from '../../application/instruments/dtos/update-instrument.dto';
import { InstrumentRepository } from '../../domain/repositories/instrument.repository';
import {
  CreateInstrument,
  DeleteInstrument,
  GetInstrument,
  GetInstruments,
  UpdateInstrument,
} from '../../application/instruments/use-cases';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { PaginationDto } from '../../application/instruments/dtos/pagination.dto';
import { Category } from '../../domain/entities/instrument.entity';

export class InstrumentController extends ControllerHandleError {
  constructor(private readonly instrumentRepository: InstrumentRepository) {
    super();
  }

  public getInstruments = async (req: Request, res: Response) => {
    const { page = 1, limit = 10, category, stringNum, search } = req.query;

    const paginationDto = PaginationDto.createFromQuery({
      page,
      limit,
      category,
      stringNum,
      search,
    });

    try {
      const instruments = await new GetInstruments(
        this.instrumentRepository
      ).execute(paginationDto);
      res.json(instruments);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public getInstrumentById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const instrument = await new GetInstrument(
        this.instrumentRepository
      ).execute(id);
      res.json(instrument);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public createInstrument = async (req: Request, res: Response) => {
    const instrumentDto = CreateInstrumentDto.create(req.body);

    try {
      const instrument = await new CreateInstrument(
        this.instrumentRepository
      ).execute(instrumentDto);
      res.status(201).json(instrument);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public updateInstrument = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const updatedInstrumentDto = UpdateInstrumentDto.create({
      ...req.body,
      id,
    });

    try {
      const instrument = await new UpdateInstrument(
        this.instrumentRepository
      ).execute(updatedInstrumentDto);
      res.json(instrument);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public deleteInstrument = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const instrument = await new DeleteInstrument(
        this.instrumentRepository
      ).execute(id);
      res.json(instrument);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
