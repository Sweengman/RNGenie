const BattleMap = require('../../models/battlemap')


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

async function viewAll(res, req, next) {
    try {
        const maps = await BattleMap.find({[req.body.userKey]: req.body.userVal})
        res.json(maps)
    } catch(err) {
        res.status(400).json(err)
    }
}