const validations = require('../validations/validate-cjs')
const models = require('../database/models')
const tools = require('./tools')

exports.getUserExists = async (req, res, next) => {
    // Check if user exists in the database
    // • If not respond with 'user not found'
    // • Otherwise return user info

    current_firebase_id = res.locals.firebase_uid

    const current_user = await models.users.findOne({
        where: { firebase_id: current_firebase_id }
    })
    if (!current_user) {
        return res.status(200).json({ message: 'user not found' })
    }

    res.status(200).json('user already exists')
}
exports.checkExistingUser = async (req, res, next) => {
    // check if user already exists in the database 404 if not 
    current_firebase_id = res.locals.firebase_uid

    const current_user = await models.users.findOne({
        where: { firebase_id: current_firebase_id }
    })
    if (!current_user) {
        console.log("Check existing user failed");
        res.status(400).json({ message: "user not found" })
        return
    }
    next()
}
module.exports.createUser = async (req, res, next) => {
    /*creo uno user data la posizione e l'utente che lo possiede*/
    const userObj = req.body
    //  bad Requests
    const validateUser = validations["user/create"]
    if (!validateUser(userObj)) {
        res.status(400).json({ status: 400, error: validateUser.errors })
        return
    }
    if (await tools.isAUserFromFbid(res.locals.firebase_uid))
        return res.status(400).json({ status: 400, error: "user already exists" })

    await models.users.create({
        username: userObj.username,
        firebase_id: res.locals.firebase_uid,
        score: 0
    })
    console.log("User created successfully");
    res.status(201).json({
        message: 'users created',
        user: { username: userObj.username },
    })
}