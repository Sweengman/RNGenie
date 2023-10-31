const BattleMap = require('../../models/battlemap')
const User = require('../../models/user')


module.exports = {
    saveMap,
    viewAll
}

async function saveMap(req, res, next) {
    try {
        const map = await BattleMap.create(req.body)
        res.json(map)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function viewAll(req, res, next) {
    try {
        const user = await User.findOne({email: req.params.id})
        const maps = [...await BattleMap.find({user: user._id})]
        res.json(maps)
    } catch(err) {
        res.status(400).json(err)
    }
}