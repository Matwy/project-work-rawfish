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