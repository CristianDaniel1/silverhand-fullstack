import { Router } from 'express';
import { InstrumentController } from './controller';

export class InstrumentRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new InstrumentController();

    router.get('/:id', controller.getInstrumentById);
    router.get('/', controller.getInstruments);

    router.post('/', controller.createInstrument);
    router.put('/:id', controller.updateInstrument);
    router.delete('/:id', controller.deleteInstrument);

    return router;
  }
}
