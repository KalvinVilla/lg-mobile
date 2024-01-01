import logger from "./logger.js";

import create from "./model/create.js";
import disconnect from "./model/disconnect.js";
import join from "./model/join.js";
import leave from "./model/leave.js";
import start from "./model/start.js";

const log = logger(import.meta);

export default function Routes(socket, io) {

    const address = socket.handshake.address;
    log.info('New client connected address: %s', address);

    socket.on('create', (data) => create(socket, io, data));
    socket.on('join', (data) => join(socket, io, data));
    socket.on('leave', (data) => leave(socket, io, data));
    socket.on('start', (data) => start(socket, io, data));

    socket.on('disconnect', (data) => disconnect(socket, io, data))

}

log.info('routes initialized')
