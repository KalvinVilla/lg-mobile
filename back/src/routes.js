import logger from "./logger.js";

import create from "./model/create.js";
import disconnect from "./model/disconnect.js";
import join from "./model/join.js";
import leave from "./model/leave.js";
import start from "./model/start.js";

const log = logger(import.meta);

export default function Routes(socket) {

    socket.on('create', create);
    socket.on('join', join);
    socket.on('leave', leave);
    socket.on('start', start);

    socket.on('disconnect', disconnect)

}

log.info('routes initialized')
