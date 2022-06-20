const e = require("express");
const { Router } = require("express");
const { getAllUsers, getUserByUuid, getUserFightpoints } = require('../controller/users_controller')

const router = Router()

router.get('/', getAllUsers)


module.exports = router