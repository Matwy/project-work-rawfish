const { Router } = require('express');
const { getAllFightpoints, getFightpointsByUuid, createFightpoints } = require('../controller/fightpoints_controller')

const router = Router()

router.get('/:uuid', getFightpointsByUuid)
router.get('/', getAllFightpoints)

router.post('/create', createFightpoints)

module.exports = router