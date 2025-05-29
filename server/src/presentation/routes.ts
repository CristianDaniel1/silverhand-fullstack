import { Router } from 'express';
import { InstrumentRoutes } from './instruments/routes';
import { AuthRoutes } from './auth/routes';
import { UserRoutes } from './users/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    const endpoint = '/silverhand/api';

    router.use(`${endpoint}/instruments`, InstrumentRoutes.routes);
    router.use(`${endpoint}/users`, UserRoutes.routes);
    router.use(`${endpoint}/auth`, AuthRoutes.routes);

    return router;
  }
}
