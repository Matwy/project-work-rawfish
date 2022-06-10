const { Router } = require("express");
const { getAllFightpoints, getFightpointsByUuid } = require('../controller/fightpoints_controller')

const router = Router()

//  GET /Fightpoints
router.get("/:uuid", getFightpointsByUuid)
router.get("/", getAllFightpoints)

module.exports = router