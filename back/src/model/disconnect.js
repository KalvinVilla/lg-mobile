import logger from "../logger.js";

const log = logger(import.meta);

export default function disconnect(socket) {

    log.info('Client disconnected');

}