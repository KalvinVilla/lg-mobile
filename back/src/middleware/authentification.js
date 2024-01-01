import logger from "../logger.js";

const log = logger(import.meta);

export default function Authentification(socket, next) {

    const address = socket.handshake.address;
    log.info('New client connected address: %s', address);

    // const { token } = socket.handshake.auth;
    // if (token === 'secret') {
    //     return next();
    // }
    //return next(new Error('authentication error'));

}