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

export class InstrumentController {
  constructor(private readonly instrumentRepository: InstrumentRepository) {}

  public getInstruments = async (req: Request, res: Response) => {
    try {
      const instruments = await new GetInstruments(
        this.instrumentRepository
      ).execute();
      res.json(instruments);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public getInstrumentById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const instrument = await new GetInstrument(
        this.instrumentRepository
      ).execute(id);
      res.json(instrument);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };

  public createInstrument = async (req: Request, res: Response) => {
    const instrumentDto = CreateInstrumentDto.create(req.body);

    try {
      const instrument = await new CreateInstrument(
        this.instrumentRepository
      ).execute(instrumentDto);
      res.status(201).json(instrument);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
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
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public deleteInstrument = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const instrument = await new DeleteInstrument(
        this.instrumentRepository
      ).execute(id);
      res.json(instrument);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
