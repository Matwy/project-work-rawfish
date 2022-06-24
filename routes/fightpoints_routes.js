const { Router } = require('express');
const { getAllFightpoints, getFightpointsByUuid, createFightpoints, setFightpointOwner, getFightpointIcon } = require('../controller/fightpoints_controller')

const router = Router()

router.get('/:uuid', getFightpointsByUuid)
router.get('/', getAllFightpoints)

router.post('/create', createFightpoints)
router.post('/update-owner', setFightpointOwner)

module.exports = router