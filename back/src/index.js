import "dotenv/config";
import logger from "./logger.js";

import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

import Game from "./game.js";

const log = logger(import.meta);

const { npm_package_name: name, npm_package_version: version } = process.env;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 3000;


io.on('connection', (socket) => {
  const address = socket.handshake.address;
  log.info('New client connected address: %s', address);


  socket.on('create', (data) => {
    const { player, roles } = data;
    const game = new Game(player, roles)
    socket.join(game.uid.toString());
    log.info('New client %s create game is uid : %s', address, game.uid);
    io.to(game.uid.toString()).emit('create_response', game.uid);
  });

  socket.on('join', (data) => {
    const { uid, player } = data;
    const game = Game.getGame(uid)
    if(game) {
      socket.join(uid);
      game.addPlayer(player)
      log.info('New client %s join game is uid : %s', address, uid);
      io.to(uid).emit('join_response', uid);
      io.to(uid).emit('list', game.players);

    } else {
      log.info("Game not found")
    }

  });

  socket.on('leave', (data) => {
    const { uid, player } = data;
    const game = Game.getGame(uid)
    if(game) {
      socket.leave(uid)
      game.removePlayer(player)
      log.info('New client %s join game is uid : %s', address, uid);
      io.to(uid).emit('leave_response', uid);
    } else {
      log.info("Game not found")
    }

  });

  socket.on('start', (uid) => {
    const game = Game.getGame(uid)

    io.to(uid).emit('start_response', {
      uid: uid,
      roleList: game.attributesRoles()
    });
  });



  socket.on('disconnect', () => {
    log.info('Utilisateur déconnecté');
  });
});

server.listen(PORT, () => {
  log.info(`${name} v${version} listening on port ${PORT}`);
});
