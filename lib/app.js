const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users_router = require('../routes/users_routes')
const fightpoint_router = require('../routes/fightpoints_routes')
const auth = require('./auth/firebaseInit')
const qa_router = require('../routes/qa_routes')
const scoreboard_router = require('../routes/scoreboard_routes')
const auth_router = require('../routes/auth_routes')
const img_router = require('../routes/img_routes')

const server = express()
// server.use((req, res, next) => {
//     console.log('req', req)
//     console.log('res', res)
//     next();
// })
server.use(bodyParser.json())
server.use(cors());

server.use('/img', img_router)

server.use(auth.validate) // firebase authentication
//  check/save user to db
server.use(auth_router)
//  frome here user is stored on the db

server.use('/fight-points', fightpoint_router)
server.use('/users', users_router)
server.use('/qa', qa_router)
server.use('/scoreboard', scoreboard_router)


server.listen(3000, () => {
    console.log("\x1b[4m\x1b[35m\x1b[1m", "[App] Server running on port 3000", "\x1b[0m")
})