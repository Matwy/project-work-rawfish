const models = require('../database/models')

exports.getQAByFightpoints = async (req, res, next) => {
    const fightpoint_uuid = req.params.uuid
    QA = await models.questions.findOne({
        attributes: ['question', 'correct_answer'],
        include: [{
            model: models.wrong_answers,
            as: 'wrong_answers',
            attributes: ['wrong_answer']
        }]
    })
    res.status(201).json(QA)
}
// 
//  POST 
// 
exports.createQuestion = async (req, res, next) => {
    const questionObj = req.body

    const question = await models.questions.create({
        question: questionObj.question,
        correct_answer: questionObj.correct_answer,
        fightpoint_uuid: questionObj.fightpoint_uuid
    })

    const uuid = question.dataValues.uuid
    for (let i = 0; i < questionObj.wrong_answers.length; i++) {
        await models.wrong_answers.create({
            question_uuid: uuid,
            wrong_answer: questionObj.wrong_answers[i]
        })
    }
    res.status(201).json({
        message: 'QA created',
    })
}