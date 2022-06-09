const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users_router = require('../routes/users_routes')
const fightpoint_router = require('../routes/fightpoints_routes')

const server = express()

server.use(bodyParser.json())
server.use(cors());

server.use('/fight-points', fightpoint_router)
server.use('/users', users_router)

server.listen(3000)