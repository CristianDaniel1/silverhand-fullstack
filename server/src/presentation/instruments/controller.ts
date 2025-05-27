import { Request, Response } from 'express';
import { CreateInstrumentDto } from '../../application/use-cases/instruments/dtos/create-Instrument.dto';
import { UpdateInstrumentDto } from '../../application/use-cases/instruments/dtos/update-instrument.dto';
import { InstrumentRepository } from '../../domain/repositories/instrument.repository';
import {
  CreateInstrument,
  DeleteInstrument,
  GetInstrument,
  GetInstruments,
  UpdateInstrument,
} from '../../application/use-cases/instruments';
import { CustomError } from '../../shared/errors/custom.error';

export class InstrumentController {
  constructor(private readonly instrumentRepository: InstrumentRepository) {}

  private handleError = (res: Response, error: unknown) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    res.status(500).json({ error: 'Internal Server Error - Check logs' });
  };

  public getInstruments = async (req: Request, res: Response) => {
    try {
      const instruments = await new GetInstruments(
        this.instrumentRepository
      ).execute();
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
