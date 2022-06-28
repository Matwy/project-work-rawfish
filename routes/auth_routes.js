const { Router } = require("express");
const { getUserExists, checkExistingUser, createUser } = require("../controller/auth_controller");

router = Router()
router.get('/user/exist', getUserExists)
router.post('/user/create', createUser)
router.use(checkExistingUser)

module.exports = router