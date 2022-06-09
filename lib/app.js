// const models = require('../database/models')
const cors = require('cors')
const express = require('express')
const server = express()

const bodyParser = require('body-parser')
server.use(bodyParser.json())

server.use(cors());


server.listen(3000)