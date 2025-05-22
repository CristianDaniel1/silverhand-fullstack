import { Router } from 'express';
import { InstrumentRoutes } from './instruments/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    const endpoint = '/silverhand/api';

    router.use(`${endpoint}/instruments`, InstrumentRoutes.routes);

    return router;
  }
}
