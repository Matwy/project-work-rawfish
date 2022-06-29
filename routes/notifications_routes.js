const { Router } = require("express");
const { deleteAllNotifications, deleteNotificationByUuid } = require('../controller/notifications_controller')
const router = Router()

router.delete('/delete-all', deleteAllNotifications)
router.delete('/delete', deleteNotificationByUuid)

module.exports = router