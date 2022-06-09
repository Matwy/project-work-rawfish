const { where } = require('sequelize/types')
const models = require('../database/models')

module.exports.getAllUsers = async (req, res, next) => {
    //  restituisco tutti gli utenti
    const allUsers = await models.users.findAll()
    res.status(200).json(allUsers)
}
module.exports.getUsersFightPoints = async (req, res, next) => {
    //  restituisco i fight point di un utente specifico 
    const user_uuid_params = req.params.user_uuid
    next()
    // const allUsers = await models.users.findAll({
    //     where: { user_uuid: user_uuid_params }
    // })
    // res.status(200).json(allUsers)
}