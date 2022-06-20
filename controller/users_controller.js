const models = require('../database/models')
const tools = require('./tools')

module.exports.getUserInfo = async (firebaseIdObj) => {
    const userInfo = await models.users.findOne({
        attributes: ['uuid', 'firebase_id', 'username', 'createdAt'],
        where: {
            firebase_id: firebaseIdObj
        },
        raw: true
    })
    userInfo.fightpointsOwned = await models.fightpoints.findAll({

        where: {
            user_uuid: userInfo.uuid
        },
        raw: true
    })
    /*  TODO: controlla se funzionano le notifiche  */
    userInfo.notifications = await models.notifications.findAll({
        where: {
            user_uuid: userInfo.uuid,
        }
    })
    userInfo.uuid = undefined
    return userInfo
}
// 
// GET
// 
module.exports.getAllUsers = async (req, res, next) => {
    //  restituisco tutti gli utenti
    const allUsers = await models.users.findAll()
    res.status(200).json(allUsers)
}


//
//  POST
//
