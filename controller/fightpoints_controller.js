const models = require('../database/models')
const tools = require('./tools')

module.exports.getAllFightpoints = async (req, res, next) => {
    /*restituisco tutti i fightspoint*/
    allMonuments = await models.fightpoints.findAll({
        attributes: ['state', 'city', 'posizione'],
        include: [{ model: models.users, as: 'user', attributes: ['uuid', 'username'] }]
    })
    res.status(200).json(allMonuments)
}
module.exports.getFightpointsByUuid = async (req, res, next) => {
    /*  restituisco i fight point di un utente specifico */
    const uuid_params = req.params.uuid

    if (!tools.isUuid(uuid_params)) {
        //uuid non valido
        res.status(400).json({ status: 400, message: uuid_params + ' is not an uuid' })
        return
    }

    const fightpointsById = await models.fightpoints.findOne({
        where: { uuid: uuid_params }
    })

    res.status(200).json(fightpointsById)
}
module.exports.createFightpoints = async (req, res, next) => {
    /*creo un fightpoint data la posizione e l'utente che lo possiede*/
    const fightpointObj = req.body
    //  bad Requests
    if (!('user_uuid' in fightpointObj && 'posizione' in fightpointObj)) {
        res.status(400).json({ status: 400, message: fightpointObj + " doesn't have needed property" })
        return
    }
    if (!await tools.isAUser(fightpointObj.user_uuid) && fightpointObj.user_uuid != null) {
        res.status(400).json({ status: 400, message: fightpointObj + " the user don't exist" })
        return
    }
    if (await tools.isAFightpointsCopy(fightpointObj.posizione)) {
        res.status(400).json({ status: 400, message: fightpointObj + " the fighpoint already exist" })
        return
    }
    await models.fightpoints.create({
        posizione: fightpointObj.posizione,
        state: fightpointObj.state,
        city: fightpointObj.city,
        user_uuid: fightpointObj.user_uuid,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.status(201).json({
        message: 'fightpoints created',
        fightpoint: {
            posizione: fightpointObj.posizione,
            state: fightpointObj.state,
            city: fightpointObj.city,
            user_uuid: fightpointObj.user_uuid
        },
    })
}
exports.setFightpointOwner = (req, res, next) => {
    const reqObj = req.body
    models.fightpoints.update({
        user_uuid: reqObj.user_uuid,
        where: { uuid: reqObj.fightpoints_uuid }
    })
    res.status(200).json({ message: 'fightpoint owner updated' })
}