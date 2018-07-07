import * as express from 'express';
import * as next from 'next';
import { apiRouter } from './api';

interface ServerConfig {
  clientPath: string;
  dev: boolean;
  port: number;
}

export const setupServer = async ({ clientPath, dev, port }: ServerConfig) => {
  const client = next({ dir: clientPath, dev });
  const server = express();
  const handler = client.getRequestHandler();

  // client intialization
  await client.prepare();

  // setup REST api routes
  server.use('/api', apiRouter);

  // unmatched routes will be handled by Next.js
  server.get('*', (req, res) => {
    return handler(req, res);
  });

  // start server
  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
};
