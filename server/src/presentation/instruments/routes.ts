import { Router } from 'express';
import { InstrumentController } from './controller';
import { validateData } from '../middlewares/validation-data.middleware';
import { InstrumentSchema } from './schemas/instrument.validator';
import { UpdateInstrumentSchema } from './schemas/update-instrument.validator';
import { InstrumentIdSchema } from './schemas/instrument-id.validator';
import { InstrumentDatasourceImpl } from '../../infrastructure/datasources/instrument.datasource.impl';
import { InstrumentRepositoryImpl } from '../../infrastructure/repositories/instrument.repository.impl';

export class InstrumentRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new InstrumentDatasourceImpl();
    const instrumentRepository = new InstrumentRepositoryImpl(datasource);

    const controller = new InstrumentController(instrumentRepository);

    router.get(
      '/:id',
      [validateData(InstrumentIdSchema)],
      controller.getInstrumentById
    );

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

    router.delete(
      '/:id',
      [validateData(InstrumentIdSchema)],
      controller.deleteInstrument
    );

    return router;
  }
}
