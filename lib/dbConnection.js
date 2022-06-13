const Sequelize = require('sequelize')
const envConfigs = require('../database/config/config')
// Import events module
const events = require('events')
let eventEmitter = new events.EventEmitter()

const env = process.env.NODE_ENV || 'development'
const config = envConfigs[env]

// DB CONNECTION
console.info('[Sequelize] DB CONNECTION URL: ' + config.url)

const sequelize = new Sequelize(config.url)

// check we're correctly connected to the database
sequelize.authenticate().then(() => {
    eventEmitter.emit('connected')
}).catch(err => {
    console.error('Unable to connect to the database: ' + err)
})


module.exports = {
    sequelize: sequelize,
    em: eventEmitter
}