const Foe = require('../../models/foe')
const User = require('../../models/user')

module.exports = {
    saveFoe,
    viewFoes
}

async function saveFoe(req, res, next) {
    try {
        const foe = await Foe.create(req.body)
        res.json(foe)
    } catch(err) {
        console.error(err)
    }
}

async function viewFoes(req, res, next) {
    try {
        const user = await User.findOne({email: req.params.id})
        const foes = [...await Foe.find({user: user._id})]
        res.json(foes)
    } catch(err) {
        console.error(err)
    }
}