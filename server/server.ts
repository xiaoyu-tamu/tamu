import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { apiRouter } from './resources/api';
import { appName } from '../shared/constants';

export interface ServerConfig {
  port: number;
  dev: boolean;
  restHandler: any;
}

export default function server({ port, restHandler, dev }: ServerConfig) {
  const app = express();

  return class Server {
    static prepare() {
      if (!process.env.DB_URL) {
        throw new Error('cannot find enviroment variable DB_URL');
      }
      mongoose.connect(
        process.env.DB_URL,
        { useNewUrlParser: true }
      );

      this.applyRoutes();
      this.applyMiddleware();

      return this;
    }

    static run() {
      const devMessage = `[development] http://localhost:${port}`;
      const prodMessage = `[production] `;

      app.listen(port, () => {
        console.log(`[${appName}] server is running on ${dev ? devMessage : prodMessage}`);
      });
    }

    private static applyRoutes() {
      app.use('/api', apiRouter);
      app.get('*', restHandler);
    }

    /**
     * setting up global middlewares
     */
    private static applyMiddleware() {
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
    }
  };
}
