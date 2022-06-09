const Sequelize = require('sequelize')
const envConfigs = require('../database/config/config')

// Import events module
const events = require('events')
let eventEmitter = new events.EventEmitter()

const env = process.env.NODE_ENV || 'development'
const config = envConfigs[env]

console.info(' ==========  MODE: ' + env + ' ================= ')

// DB CONNECTION
// =============
// console.info(' ==========  CONNECTION URL: ' + config.url + ' ================= ')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// check we're correctly connected to the database
sequelize.authenticate().then(() => {
    console.info('Connection has been established successfully')
    eventEmitter.emit('connected')
}).catch(err => {
    console.error('Unable to connect to the database: ' + err)
})


module.exports = {
    sequelize: sequelize,
    em: eventEmitter
}