export default function join(socket) {
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
}