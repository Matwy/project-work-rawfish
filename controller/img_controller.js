const path = require('path')
const fs = require('fs')

module.exports.getCountryIcon = (req, res, next) => {
    let country = req.query.country
    country = country.toLowerCase()
    country = country.replace(' ', '-')
    const imgPath = path.join(__dirname, '../img/countryIcons/' + country + '.png')

    if (!fs.existsSync(imgPath)) {
        return res.status(404).json({ message: 'Country icon not found' })
    }
    res.sendFile(imgPath)
}
module.exports.getAvatarIcon = (req, res, next) => {
    let avatarId = req.query.id
    const imgPath = path.join(__dirname, '../img/avatar/' + avatarId + '.png')

    if (!fs.existsSync(imgPath)) {
        return res.status(404).json({ message: 'Avatar icon not found' })
    }
    res.sendFile(imgPath)
}