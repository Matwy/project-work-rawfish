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
    if (!userInfo)
        return

    let fightpointsOwned = await models.fightpoints.findAll({
        attributes: ['uuid', 'state', 'city', 'posizione', 'score'],
        include: [
            { model: models.users, as: 'user', attributes: ['username', 'firebase_id', 'avatar'] },
            { model: models.questions, as: 'questions' }
        ],
        where: {
            user_uuid: userInfo.uuid
        },
    })
    fightpointsOwned = JSON.parse(JSON.stringify(fightpointsOwned))
    for (let i = 0; i < fightpointsOwned.length; i++) {
        fightpointsOwned[i].n_questions = fightpointsOwned[i].questions.length
        fightpointsOwned[i].questions = undefined
    }
    userInfo.fightpointsOwned = fightpointsOwned
    /*  TODO: controlla se funzionano le notifiche  */
    userInfo.notifications = await models.notifications.findAll({
        attributes: [['createdAt', 'dateTime'], ['score', 'yourScore']],
        include: [
            {
                model: models.fightpoints,
                as: 'fightpoint',
                attributes: ['uuid', 'state', 'city', 'posizione', 'score'],
                include: [{ model: models.users, as: 'user', attributes: ['username', 'firebase_id', 'avatar'] }]
            }
        ],
        where: {
            user_uuid: userInfo.uuid,
        },
        order: [['createdAt', 'DESC']]
    })
    userInfo.uuid = undefined
    return userInfo
}
module.exports.UserInfoFromFbid = async (req, res, next) => {
    const userInfo = await this.getUserInfo(res.locals.firebase_uid)
    return res.status(200).json(userInfo)
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
