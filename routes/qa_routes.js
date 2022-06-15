const { Router } = require("express")

const router = Router()

const { getQAByFightpoints, createQuestion } = require('../controller/qa_controller')

router.get('/:uuid', getQAByFightpoints)

router.post('/create', createQuestion)

module.exports = router