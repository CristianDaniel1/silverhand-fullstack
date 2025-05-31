import { Router } from 'express';
import { InstrumentController } from './controller';
import { validateData } from '../middlewares/validation-data.middleware';
import { InstrumentSchema } from './schemas/instrument.validator';
import { UpdateInstrumentSchema } from './schemas/update-instrument.validator';
import { IdSchema } from '../../shared/schemas/id-number.validator';
import { InstrumentDatasourceImpl } from '../../infrastructure/datasources/instrument.datasource.impl';
import { InstrumentRepositoryImpl } from '../../infrastructure/repositories/instrument.repository.impl';
import { PaginationSchema } from './schemas/pagination.validator';
import { AuthRolesMiddleware } from '../middlewares/auth-roles.middleware';
import { Role } from '../../domain/entities/user.entity';
import { AuthMiddleWare } from '../middlewares/auth.middleware';

export class InstrumentRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new InstrumentDatasourceImpl();
    const instrumentRepository = new InstrumentRepositoryImpl(datasource);

    const controller = new InstrumentController(instrumentRepository);

    router.get('/:id', [validateData(IdSchema)], controller.getInstrumentById);

    router.get(
      '/',
      [validateData(PaginationSchema)],
      controller.getInstruments
    );

    router.post(
      '/',
      [
        AuthMiddleWare.validateJWT,
        AuthRolesMiddleware.authorizeRoles(Role.ADMIN),
        validateData(InstrumentSchema),
      ],
      controller.createInstrument
    );

    router.put(
      '/:id',
      [
        AuthMiddleWare.validateJWT,
        AuthRolesMiddleware.authorizeRoles(Role.ADMIN),
        validateData(UpdateInstrumentSchema),
      ],
      controller.updateInstrument
    );

    router.delete(
      '/:id',
      [
        AuthMiddleWare.validateJWT,
        AuthRolesMiddleware.authorizeRoles(Role.ADMIN),
        validateData(IdSchema),
      ],
      controller.deleteInstrument
    );

    return router;
  }
}
