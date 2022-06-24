const { Router } = require("express");
const { getScoreBoard } = require('../controller/scoreboard_controller')
const router = Router()

router.get('/', getScoreBoard)

module.exports = router