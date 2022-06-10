const { Router } = require("express");
const { getAllUsers, getUserByUuid } = require('../controller/users_controller')

const router = Router()

router.get('/:uuid', getUserByUuid)
router.get('/', getAllUsers)

module.exports = router
