const e = require("express");
const { Router } = require("express");
const { getAllUsers, UserInfoFromFbid, updateUser } = require('../controller/users_controller')

const router = Router()

router.get('/', getAllUsers)
router.get('/info', UserInfoFromFbid)

router.post('/update', updateUser)

module.exports = router