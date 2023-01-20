import cors from 'cors';
import express from 'express';
import http from 'http';
import { createTerminus } from '@godaddy/terminus';

import { Workspace } from '@packages/types';

const app = express();
const port = 5000;
const server = http.createServer(app);

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/workspaces', (_, response) => {
  const workspaces: Workspace[] = [
    { name: 'client', version: '1.0.0' },
    { name: 'server', version: '1.0.0' },
    { name: 'types', version: '1.0.0' },
  ];
  response.json({ data: workspaces });
});

createTerminus(server);

server.listen(port, () => console.log(`Listening on http://localhost:${port}...`));
