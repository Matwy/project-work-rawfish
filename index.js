const dbConnect = require('./lib/dbConnection')
const redisConnect = require('./lib/redisLogger')

let dbConnected = false
let redisConnected = false

function check4Start() {
    if (dbConnected && redisConnect) {
        console.info('[Index] ===> STARTING APP.JS <===')
        require('./lib/app')
    }
}
dbConnect.em.on('connected', () => {
    console.info('[Sequelize] DB connected successfully')
    dbConnected = true
    check4Start()
})
redisConnect.events.on('ready', () => {
    console.info('[Redis] connected successfully')
    redisConnected = true
    check4Start()
});

