const models = require('../database/models')

module.exports.getAllFightpoints = async (req, res, next) => {
    allMonuments = await models.pings.findAll()
    res.status(200).json(allMonuments)
}