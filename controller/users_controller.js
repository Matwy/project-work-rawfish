const models = require('../database/models')
// Regular expression to check if string is a valid UUID
const regexExp = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

module.exports.getAllUsers = async (req, res, next) => {
    //  restituisco tutti gli utenti
    const allUsers = await models.users.findAll()
    res.status(200).json(allUsers)
}
module.exports.getUserByUuid = async (req, res, next) => {
    /*  restituisco i fight point di un utente specifico */
    const uuid_params = req.params.uuid

    if (!regexExp.test(uuid_params)) {
        //uuid non valido
        res.status(400).json({ status: 400, message: uuid_params + ' is not an uuid' })
        return
    }

    const userById = await models.users.findOne({
        where: { uuid: uuid_params }
    })
    const userFightpoints = await models.fightpoints

    res.status(200).json(userById)
}