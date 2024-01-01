import Game from "../game.js";
import logger from "../logger.js";

const log = logger(import.meta);

export default function leave(socket, io, data) {

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

}