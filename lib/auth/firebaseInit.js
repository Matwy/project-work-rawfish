const models = require('../../database/models')
// auth with firebase. From here on, all requests to endpoints declared AFTER this point will need to be authenticated
// with the firebase module
require('dotenv').config()
const firebaseAuthModule = require('firebase-admin-aux');
firebaseAuthModule.initialize(
    process.env.FIREBASE_PROJECT_ID,
    process.env.FIREBASE_CLIENT_EMAIL,
    process.env.FIREBASE_PRIVATE_KEY,
    process.env.FIREBASE_DATABASE_URL,
    true
)
exports.validate = (req, res, next) => firebaseAuthModule.validateToken(req, res, next)

exports.getUserExists = async (req, res, next) => {
    // responde if user already exists on the database
    current_firebase_id = res.locals.firebase_uid

    const current_user = await models.users.findOne({
        where: { firebase_id: current_firebase_id }
    })
    if (!current_user) {
        console.log('NOT FOUND');
        return res.status(200).json({ message: 'user not found' })
    }
    res.status(200).json({ message: 'user found successfully' })
}
exports.checkExistingUser = async (req, res, next) => {
    // check if user already exists in the database 404 if not 
    current_firebase_id = res.locals.firebase_uid

    const current_user = await models.users.findOne({
        where: { firebase_id: current_firebase_id }
    })
    if (!current_user) {
        res.status(404).json({ message: "user not found" })
        return
    }
    next()
}
