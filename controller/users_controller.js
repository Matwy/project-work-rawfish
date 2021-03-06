const models = require('../database/models')
const tools = require('./tools')
const validations = require('../validations/validate-cjs')

module.exports.getUserInfo = async (firebaseIdObj) => {
    const userInfo = await models.users.findOne({
        attributes: ['uuid', 'firebase_id', 'username', 'avatar', 'createdAt'],
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
        attributes: ['uuid', ['createdAt', 'dateTime'], ['score', 'yourScore']],
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
module.exports.updateUser = async (req, res, next) => {
    /*creo uno user data la posizione e l'utente che lo possiede*/
    const userObj = req.body
    //  bad Requests
    const validateUser = validations["user/create"]
    if (!validateUser(userObj)) {
        res.status(400).json({ status: 400, error: validateUser.errors })
        return
    }
    if (!await tools.isAUserFromFbid(res.locals.firebase_uid))
        return res.status(400).json({ status: 400, error: "user don't exists" })

    await models.users.update(
        {
            username: userObj.username,
            avatar: userObj.avatar
        },
        {
            where: { firebase_id: res.locals.firebase_uid, }
        })
    console.log("User updated successfully", userObj.username, userObj.avatar);
    res.status(201).json({
        message: 'users updated successfully',
        user: { username: userObj.username, avatar: userObj.avatar },
    })
}