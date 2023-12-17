export default function create(socket) {

    socket.on('create', (data) => {
        const { player, roles } = data;
        const game = new Game(player, roles)
        socket.join(game.uid.toString());
        log.info('New client %s create game is uid : %s', address, game.uid);
        io.to(game.uid.toString()).emit('create_response', game.uid);
      });

}