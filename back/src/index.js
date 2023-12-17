import "dotenv/config";
import logger from "./logger.js";

import express from 'express';
import http from 'http';

import { Server } from 'socket.io';

import Routes from "./routes.js";
import Authentification from "./middleware/authentification.js";

const log = logger(import.meta);
const { npm_package_name: name, npm_package_version: version } = process.env;
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});


io.use(Authentification);
io.on('connection', Routes);


server.listen(PORT, () => {
  log.info(`${name} v${version} listening on port ${PORT}`);
});
