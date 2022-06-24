const path = require('path')
const fs = require('fs')

module.exports = (req, res, next) => {
    let country = req.query.country
    country = country.toLowerCase()
    country = country.replace(' ', '-')
    const imgPath = path.join(__dirname, '../img/' + country + '.png')

    if (!fs.existsSync(imgPath)) {
        return res.status(404).json({ message: 'Country icon not found' })
    }
    res.sendFile(imgPath)
}