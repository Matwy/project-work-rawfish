const { Router } = require("express");
const { getUserExists, checkExistingUser, createUser } = require("../controller/auth_controller");

router = Router()
router.get('/exist', getUserExists)
router.post('/create', createUser)
router.use(checkExistingUser)

module.exports = router