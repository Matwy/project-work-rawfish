const { Router } = require("express")

const router = Router()

const { getQAByFightpoints, createQuestion } = require('../controller/qa_controller')

router.get('/', getQAByFightpoints)

router.post('/create', createQuestion)

module.exports = router