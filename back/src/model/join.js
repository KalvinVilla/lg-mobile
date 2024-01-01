import Game from "../game.js";
import logger from "../logger.js";

const log = logger(import.meta);


export default function join(socket, io, data) {

  const { uid, player } = data;
  const game = Game.getGame(uid)
  if(game) {
    socket.join(uid);
    game.addPlayer(player)
    log.info('New client join game is uid : %s', uid);
    io.to(uid).emit('join_response', uid);
    io.to(uid).emit('list', game.players);
  } else {
    log.info("Game not found")
  }
}