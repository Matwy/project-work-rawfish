const { Router } = require("express");
const { getAllUsers, getUserByUuid, createUser } = require('../controller/users_controller')

const router = Router()

router.get('/:uuid', getUserByUuid)
router.get('/', getAllUsers)

router.post('/create', createUser)

module.exports = router