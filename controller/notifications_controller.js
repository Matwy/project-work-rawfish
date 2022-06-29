const models = require('../database/models')
const tools = require('./tools')

exports.deleteAllNotifications = async (req, res, next) => {
    user_uuid = await models.users.findOne({
        attributes: ['uuid'],
        where: {
            firebase_id: res.locals.firebase_uid
        },
        raw: true
    })

    await models.notifications.destroy({
        where: { user_uuid: user_uuid.uuid }
    })

    res.status(200).json({ status: 200, message: "deleted succesfully" })
}
exports.deleteNotificationByUuid = async (req, res, next) => {
    const uuid = req.query.uuid

    if (!tools.isUuid(uuid))
        return res.status(404).json({ status: 404, message: "not a valid uuid" })

    const notification = await models.notifications.findOne({
        where: { uuid: uuid }
    })

    if (!notification)
        return res.status(404).json({ status: 404, message: "notification not found" })

    await notification.destroy()

    res.status(200).json({ status: 200, message: "deleted succesfully" })
}