import * as next from 'next';
import server from './server';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

(async () => {
  // prepare client
  const client = next({ dir: 'client', dev });
  await client.prepare();

  // prepare server
  server({ port: port, restHandler: client.getRequestHandler(), dev: dev })
    .prepare()
    .run();
})();
