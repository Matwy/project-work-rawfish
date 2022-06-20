const models = require('../database/models')
const tools = require('./tools')
const validations = require('../validations/validate-cjs')
// 
// GET
// 
module.exports.getAllFightpoints = async (req, res, next) => {
    /*  restituisco tutti i fightpoints */
    //  con gli user associati
    //  e con il numero di domande per fightpoint
    const allMonuments = await models.fightpoints.findAll({
        attributes: ['uuid', 'state', 'city', 'posizione'],
        include: [
            { model: models.users, as: 'user', attributes: ['username', 'firebase_id'] },
            { model: models.questions, as: 'questions' }
        ]
    })
    const fightpoints = JSON.parse(JSON.stringify(allMonuments))
    for (let i = 0; i < fightpoints.length; i++) {
        fightpoints[i].n_questions = fightpoints[i].questions.length
        fightpoints[i].questions = undefined
    }
    res.status(200).json(fightpoints)
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

// 
// POST
// 
module.exports.createFightpoints = async (req, res, next) => {
    /*creo un fightpoint data la posizione e l'utente che lo possiede*/
    const fightpointObj = req.body
    //  bad Requests
    const validateFightpoint = validations["fightpoints/create"]
    if (!validateFightpoint(fightpointObj)) {
        res.status(400).json({ status: 400, error: validateFightpoint.errors })
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
exports.setFightpointOwner = async (req, res, next) => {
    const user_uuid = req.body.user_uuid
    const fightpoint_uuid = req.body.fightpoint_uuid

    //bad requests
    //check user uuid
    if (!await tools.isAUser(user_uuid)) {
        res.status(400).json({ status: 400, message: user_uuid + " the user don't exist" })
        return
    }
    //check fightpoint uuid
    if (!await tools.isAFightpoints(fightpoint_uuid)) {
        res.status(400).json({ status: 400, message: fightpoint_uuid + " the fightpoint don't exist" })
        return
    }
    // save last fightpoint owner for notification
    const fightpoint = await models.fightpoints.findOne({
        where: { uuid: fightpoint_uuid }
    })
    lastOwner = fightpoint.user_uuid
    //updateOwner
    await models.fightpoints.update(
        { user_uuid: user_uuid },
        { where: { uuid: fightpoint_uuid } }
    )
    /* TODO: controlla se funziona */
    // save notification for the last Owner
    if (lastOwner) {
        await models.notifications.create({
            user_uuid: lastOwner,
            fightpoint_uuid: fightpoint_uuid
        })
    }
    res.status(200).json({ message: 'fightpoint owner updated' })
}