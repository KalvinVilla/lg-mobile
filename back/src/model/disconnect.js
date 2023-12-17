export default function disconnect(socket) {

    socket.on('disconnect', () => {
        log.info('Client disconnected');
    });

}