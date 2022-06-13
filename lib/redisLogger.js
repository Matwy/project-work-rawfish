const redisClientAux = require('redis-client-aux');
const redisOptions = {
    url: process.env.REDIS_URL,
    options: {},
    retry_strategy(options) {
        console.info('[Redis] going to reconnect to "' + process.env.REDIS_URL + '" after: ' + Math.min(options.attempt * 100, 3000));
        return Math.min(options.attempt * 100, 3000);
    }
};

let client = new redisClientAux(redisOptions);

module.exports = client;