const models = require('../database/models')
const Redis = require('ioredis')
const { Sequelize } = require('../database/models')

exports.getScoreBoard = async function (req, res, next) {
    const scoreBoard = await models.users.findAll({
        attributes: ['username', [Sequelize.literal('count(fightpoint.uuid)'), 'score']],
        include: [
            { model: models.fightpoints, as: 'fightpoint', attributes: [] },
        ],
        group: ['users.uuid'],
        order: [[Sequelize.literal('count(fightpoint.uuid)'), 'DESC']],
        raw: true
    })
    res.status(200).json(scoreBoard)
}