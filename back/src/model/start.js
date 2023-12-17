export default function start(socket) {

    // socket.on('start', (data) => {
    //     const { uid } = data;
    //     const game = Game.getGame(uid)
    //     if(game) {
    //       game.start()
    //       log.info('New client %s start game is uid : %s', address, uid);
    //       io.to(uid).emit('start_response', uid);
    //     } else {
    //       log.info("Game not found")
    //     }
    //   });

      socket.on('start', (uid) => {
        const game = Game.getGame(uid)
    
        io.to(uid).emit('start_response', {
          uid: uid,
          roleList: game.attributesRoles()
        });
      });

}