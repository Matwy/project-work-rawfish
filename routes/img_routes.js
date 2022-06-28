const { Router } = require("express");
const { getCountryIcon, getAvatarIcon } = require('../controller/img_controller')
const router = Router()

router.get('/country', getCountryIcon)
router.get('/avatar', getAvatarIcon)

module.exports = router