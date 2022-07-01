const models = require('../database/models')
const { Sequelize } = require('../database/models')

exports.getScoreBoard = async function (req, res, next) {
    const scoreBoard = await models.users.findAll({
        attributes: ['username', 'avatar', 'score'],
        order: [['score', 'DESC']],
        raw: true
    })
    res.status(200).json(scoreBoard)
}