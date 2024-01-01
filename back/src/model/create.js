import Game from "../game.js";
import logger from "../logger.js";

const log = logger(import.meta);


export default function create(socket, io, data) {

  const { player, roles } = data;
  const game = new Game(player, roles)
  socket.join(game.uid.toString());
  log.info('Client : %s', game.uid);
  io.to(game.uid.toString()).emit('create_response', game.uid);
}