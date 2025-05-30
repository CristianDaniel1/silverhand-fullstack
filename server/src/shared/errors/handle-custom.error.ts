import { Response } from 'express';
import { CustomError } from './custom.error';

export class ControllerHandleError {
  public handleError = (res: Response, error: unknown) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    console.log(error);

    res.status(500).json({ error: 'Internal Server Error - Check logs' });
  };
}
