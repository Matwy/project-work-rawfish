const { Router } = require("express");
const { getAllFightpoints } = require('../controller/fightpoints_controller')

const router = Router()

//  GET /Fightpoints
router.get("/", getAllFightpoints)

module.exports = router