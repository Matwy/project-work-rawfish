const models = require('../database/models')
const tools = require('./tools')
exports.getQAByFightpoints = async (req, res, next) => {
    const fightpoint_uuid = req.query.fightpoint_uuid
    let n_question = req.query.n_question
    console.log('q/a request ', fightpoint_uuid, n_question);
    /*BAD REQUESTS*/
    //  n_question validation
    console.log(req.query);
    if (isNaN(n_question) || n_question.length < 0)
        return tools.badRequest(res, 'n_question ' + n_question + ' must be a number')

    // fightpoint_uuid validation
    if (!tools.isUuid(fightpoint_uuid))
        //uuid non valido
        return tools.badRequest(res, fightpoint_uuid + ' is not a uuid')

    console.log(fightpoint_uuid, 'fightpoint_uuid');
    let QA = await models.questions.findAll({
        where: { fightpoint_uuid: fightpoint_uuid },
        attributes: ['question', 'correct_answer'],
        include: [{
            model: models.wrong_answers,
            as: 'wrong_answers',
            attributes: ['wrong_answer']
        }]
    })
    // fightpoint don't exist or don't have questions
    if (QA == null)
        return res.status(400).json({ status: 400, message: fightpoint_uuid + ' is not a fightpoint or dont have any question' })

    // if QA[n_question] out of bounds then take the last question 
    if (n_question >= QA.length)
        n_question = QA.length - 1

    QA = QA[n_question].dataValues
    // shape wrong_answers from [{}, {}] to ["",""]
    const wrong_answers = QA.wrong_answers
    for (let i = 0; i < wrong_answers.length; i++) {
        QA.wrong_answers[i] = wrong_answers[i].wrong_answer
    }
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