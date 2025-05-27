import { AppRoutes } from './../src/presentation/routes';
import { PORT } from './../src/config/envs';
import { Server } from '../src/presentation/server';

export const testServer = new Server({
  port: PORT,
  routes: AppRoutes.routes,
});
