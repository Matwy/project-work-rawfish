const e = require("express");
const { Router } = require("express");
const { getAllUsers, UserInfoFromFbid } = require('../controller/users_controller')

const router = Router()

router.get('/', getAllUsers)
router.get('/info', UserInfoFromFbid)


module.exports = router