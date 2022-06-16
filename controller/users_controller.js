const models = require('../database/models')
const fightpoints = require('../database/models/fightpoints')
const tools = require('./tools')

// 
// GET
// 
module.exports.getAllUsers = async (req, res, next) => {
    //  restituisco tutti gli utenti
    const allUsers = await models.users.findAll()
    res.status(200).json(allUsers)
}
module.exports.getUserByUuid = async (req, res, next) => {
    /*  restituisco i fight point di un utente specifico */
    const uuid_params = req.params.uuid

    if (!tools.isUuid(uuid_params)) {
        //uuid non valido
        res.status(400).json({ status: 400, message: uuid_params + ' is not an uuid' })
        return
    }

    const userById = await models.users.findOne({
        where: { uuid: uuid_params }
    })
    const userFightpoints = await models.fightpoints.findAll({
        where: { 'user_uuid': userById.uuid }
    })
    userById.userFightpoints = userFightpoints
    res.status(200).json(userById)
}
module.exports.getUserFightpoints = async (req, res, next) => {
    const firebaseIdObj = req.query.user
    if (tools.isAUser(firebaseIdObj)) {
        res.status(400).json({ status: 400, message: firebaseIdObj + " it's not a users" })
        return
    }
    const fightpoints = await models.users.findAll({
        where: { firebase_id: firebaseIdObj },
        include: [{
            model: models.fightpoints, as: 'fightpoint',
            require: false
        }]
    })
    res.status(200).json(fightpoints)
}

//
//  POST    
//
module.exports.createUser = async (req, res, next) => {
    /*creo uno user data la posizione e l'utente che lo possiede*/
    const userObj = req.body
    //  bad Requests

    if (userObj == null || !('username' in userObj) || !('firebase_id' in userObj)) {
        res.status(400).json({ status: 400, message: userObj + " doesn't have needed property" })
        return
    }
    await models.users.create({
        username: userObj.username,
        firebase_id: userObj.firebase_id,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.status(201).json({
        message: 'users created',
        user: { username: userObj.username },
    })
}