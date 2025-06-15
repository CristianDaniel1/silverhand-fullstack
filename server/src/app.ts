import { PORT, PUBLIC_PATH } from './config/envs';
import { EmailService } from './presentation/emails/email.service';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: PORT,
    publicPath: PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}
