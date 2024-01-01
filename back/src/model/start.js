import Game from "../game.js";
import logger from "../logger.js";

const log = logger(import.meta);

export default function start(socket, io, data) {
  const uid = data;
  console.log(data)
  const game = Game.getGame(uid)

  if(game) {
    //game.start()
    log.info('New client start game is uid : %s', uid);
    io.to(uid).emit('start_response', {
      uid: uid,
      roleList: game.attributesRoles()
    });
  } else {
    log.info("Game not found")
  }


    


}