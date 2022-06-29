const { Router } = require("express");
const { getUserExists, checkExistingUser, createUser } = require("../controller/auth_controller");

router = Router()
router.get('/auth/user-exist', getUserExists)
router.post('/auth/user-create', createUser)
router.use(checkExistingUser)

module.exports = router