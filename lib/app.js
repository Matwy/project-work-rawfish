const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users_router = require('../routes/users_routes')
const fightpoint_router = require('../routes/fightpoints_routes')
const auth_router = require('./auth/firebaseInit')
const qa_router = require('../routes/qa_routes')

const server = express()
// server.use((req, r, next) => {
//     console.log(req.headers)
//     next();
// })
server.use(bodyParser.json())
server.use(cors());

server.use(auth_router.validate)

server.use('/fight-points', fightpoint_router)
server.use('/users', users_router)
server.use('/qa', qa_router)

server.listen(3000, () => {
    console.log("\x1b[4m\x1b[35m\x1b[1m", "[App] Server running on port 3000", "\x1b[0m")
})