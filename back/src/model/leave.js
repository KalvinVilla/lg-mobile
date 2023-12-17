export default function leave(socket) {

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

}