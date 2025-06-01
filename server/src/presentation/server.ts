import express, { Router } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { corsMiddleware } from './middlewares/cors.middleware';

interface Options {
  port: number;
  publicPath?: string;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;
  private serverListener?: any;

  constructor(options: Options) {
    const { port, routes, publicPath = 'public' } = options;

    this.port = port;
    this.publicPath = publicPath;
    this.routes = routes;

    this.configure();
  }

  private configure() {
    // * Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(compression());
    this.app.use(cookieParser());
    this.app.use(corsMiddleware());
    // // * Public Folder
    // this.app.use(express.static(this.publicPath));
    // * Routes
    this.app.use(this.routes);
  }

  async start() {
    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

  public close() {
    this.serverListener.close();
  }
}
