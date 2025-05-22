import { Request, Response } from 'express';

export class InstrumentController {
  constructor() {}

  public getInstruments = (req: Request, res: Response) => {
    res.json('test');
  };

  public getInstrumentById = (req: Request, res: Response) => {
    const { id } = req.params;
  };

  public createInstrument = (req: Request, res: Response) => {};

  public updateInstrument = (req: Request, res: Response) => {};

  public deleteInstrument = (req: Request, res: Response) => {};
}
