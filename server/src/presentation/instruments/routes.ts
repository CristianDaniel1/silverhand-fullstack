import { Router } from 'express';
import { InstrumentController } from './controller';
import { validateData } from '../middlewares/validation-data.middleware';
import { InstrumentSchema } from './schemas/instrument.validator';
import { UpdateInstrumentSchema } from './schemas/update-instrument.validator';

export class InstrumentRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new InstrumentController();

    router.get('/:id', controller.getInstrumentById);
    router.get('/', controller.getInstruments);

    router.post(
      '/',
      [validateData(InstrumentSchema)],
      controller.createInstrument
    );
    router.put(
      '/:id',
      [validateData(UpdateInstrumentSchema)],
      controller.updateInstrument
    );
    router.delete('/:id', controller.deleteInstrument);

    return router;
  }
}
