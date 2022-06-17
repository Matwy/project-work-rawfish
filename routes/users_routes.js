const e = require("express");
const { Router } = require("express");
const { getAllUsers, getUserByUuid, getUserFightpoints } = require('../controller/users_controller')

const router = Router()

router.get('/fight-points', getUserFightpoints)
router.get('/:uuid', getUserByUuid)
router.get('/', getAllUsers)


module.exports = router