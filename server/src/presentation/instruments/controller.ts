import { Request, Response } from 'express';
import { CreateInstrumentDto } from '../../application/use-cases/instruments/create-Instrument.dto';
import { prisma } from '../../data/postgres';
import { UpdateInstrumentDto } from '../../application/use-cases/instruments/update-instrument.dto';

export class InstrumentController {
  constructor() {}

  public getInstruments = async (req: Request, res: Response) => {
    const instruments = await prisma.instrument.findMany();

    return res.json(instruments);
  };

  public getInstrumentById = (req: Request, res: Response) => {
    const { id } = req.params;
  };

  public createInstrument = async (req: Request, res: Response) => {
    const instrumentDto = CreateInstrumentDto.create(req.body);
    const instrument = await prisma.instrument.create({
      data: instrumentDto,
    });

    res.json(instrument);
  };

  public updateInstrument = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const updatedInstrumentDto = UpdateInstrumentDto.create({
      ...req.body,
      id,
    });

    const instrument = await prisma.instrument.findFirst({ where: { id } });

    if (!instrument)
      return res.status(404).json({ error: 'Instrumento não existe' });

    const updatedInstrument = await prisma.instrument.update({
      where: { id },
      data: updatedInstrumentDto.values,
    });

    res.json(updatedInstrument);
  };

  public deleteInstrument = (req: Request, res: Response) => {};
}
