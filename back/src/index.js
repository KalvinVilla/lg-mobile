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
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Gestion des connexions côté serveur
io.on('connection', (socket) => {
  const address = socket.handshake.address;
  log.info('New client connected address: %s', address);

  // Gestion de la demande de rejoindre le chat
  socket.on('create', () => {
    const game = new Game()
    game.addPlayer('Player 1')
    socket.join(game.uid);
    log.info('New client %s create game is uid : %s', address, game.uid);
    io.to(game.uid).emit('create_response', game.uid);
  });

  socket.on('join', (data) => {
    const { uid } = data;
    console.log(uid)

    console.log("list des games")
    Game.Games.forEach(game => {
      console.log(game)
    });
    const game = Game.getGame(uid)
    if(game) {
      socket.join(uid);
      game.addPlayer('Player 2')
      log.info('New client %s join game is uid : %s', address, uid);
      io.to(uid).emit('join_response', uid);
      io.to(uid).emit('list', game.players);

    } else {
      log.info("Game not found")
    }

  });

  socket.on('refresh', (uid) => {
    const game = Game.getGame(uid)
    if(game) {
      io.to(uid).emit('list', game.players);

    } else {
      log.info("Game not found")
    }

  });

  // Gestion de la déconnexion de l'utilisateur
  socket.on('disconnect', () => {
    log.info('Utilisateur déconnecté');
  });
});

server.listen(PORT, () => {
  log.info(`${name} v${version} listening on port ${PORT}`);
});
