const path = require('path')
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
        attributes: ['uuid', 'state', 'city', 'posizione', 'score'],
        include: [
            { model: models.users, as: 'user', attributes: ['username', 'firebase_id', 'avatar'] },
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
        message: 'fightpoints created successfully',
        fightpoint: {
            posizione: fightpointObj.posizione,
            state: fightpointObj.state,
            city: fightpointObj.city,
            user_uuid: fightpointObj.user_uuid
        },
    })
}
exports.setFightpointOwner = async (req, res, next) => {
    const firebase_id = res.locals.firebase_uid
    const fightpoint_uuid = req.body.fightpoint_uuid
    const score = req.body.score

    const current_user = await models.users.findOne({
        where: { firebase_id: firebase_id }
    })
    user_uuid = current_user.uuid
    //bad requests
    //check user uuid
    if (!current_user) {
        res.status(400).json({ status: 400, message: firebase_id + " the user don't exist" })
        return
    }
    //check fightpoint uuid
    if (!await tools.isAFightpoints(fightpoint_uuid)) {
        res.status(400).json({ status: 400, message: fightpoint_uuid + " the fightpoint don't exist" })
        return
    }
    if (isNaN(score) || !score) {
        return res.status(404).json({ status: 404, message: "Score must be a number" })
    }
    // save last fightpoint owner for notification
    const fightpoint = await models.fightpoints.findOne({
        where: { uuid: fightpoint_uuid }
    })
    lastOwner = fightpoint.user_uuid

    /* TODO: controlla se funziona */
    // save notification for the last Owner
    if (!lastOwner || !fightpoint.score) {
        //updateOwner
        await models.fightpoints.update(
            {
                user_uuid: user_uuid,
                score: score
            },
            { where: { uuid: fightpoint_uuid } }
        )
        return res.status(200).json({ message: 'fightpoint owner updated' })
    }
    // se lo score del fightpoint è maggiore allora l'utente ha perso
    if (fightpoint.score >= score) return res.status(200).json({ message: 'Loosed' })

    //updateOwner
    await models.fightpoints.update(
        {
            user_uuid: user_uuid,
            score: score
        },
        { where: { uuid: fightpoint_uuid } }
    )
    await models.notifications.create({
        user_uuid: lastOwner,
        score: score,
        fightpoint_uuid: fightpoint_uuid
    })
    res.status(200).json({ message: 'fightpoint owner updated successfully' })
}