const models = require('../database/models')
const regexExp = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

module.exports.getAllFightpoints = async (req, res, next) => {
    allMonuments = await models.fightpoints.findAll()
    res.status(200).json(allMonuments)
}
module.exports.getFightpointsByUuid = async (req, res, next) => {
    /*  restituisco i fight point di un utente specifico */
    const uuid_params = req.params.uuid

    if (!regexExp.test(uuid_params)) {
        //uuid non valido
        res.status(400).json({ status: 400, message: uuid_params + ' is not an uuid' })
        return
    }

    const fightpointsById = await models.fightpoints.findOne({
        where: { uuid: uuid_params }
    })

    res.status(200).json(fightpointsById)
}