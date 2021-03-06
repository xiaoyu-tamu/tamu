import next from 'next';
import server from './server';

// register req.docFromId in Express.Request type definition
import './services/express';

const port = Number.parseInt(process.env.PORT || '3000', 10);
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
