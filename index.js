const dbConnect = require('./lib/dbConnection')
dbConnect.em.on('connected', () => {
    require('./lib/app')
})