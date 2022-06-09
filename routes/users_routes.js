const { Router } = require("express");
const { getAllUsers, getUsersFightPoints } = require('../controller/users_controller')

const router = Router()

router.get('/', getAllUsers)
router.get('/:user_uuid', getUsersFightPoints)

module.exports = router
