const { user } = require('pg/lib/defaults')
const models = require('../database/models')
// Regular expression to check if string is a valid UUID v4
const regexExp = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

exports.isUuid = (str) => {
    return regexExp.test(str)
}

exports.isAUser = async (str) => {
    //  uuid Not valid
    if (!this.isUuid(str)) return false
    //  user don't exist
    const user = await models.users.findOne({ where: { uuid: str } })
    if (user == null) return false

    //user exist
    console.log(user)
    return true
}
exports.isAFightpoints = async (str) => {
    //  uuid Not valid
    if (!this.isUuid(str)) return false
    //  fightpoints don't exist
    const fightpoint = await models.fightpoints.findOne({ where: { uuid: str } })
    if (fightpoint == null) return false

    //fightpoints exist
    console.log(fightpoint)
    return true
}
exports.isAFightpointsCopy = async (str) => {
    //  fightpoints don't exist
    const fightpoint = await models.fightpoints.findOne({ where: { posizione: str } })
    if (fightpoint == null) return false

    //fightpoints exist
    console.log(fightpoint)
    return true
}