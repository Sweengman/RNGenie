const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foeSchema = new Schema({
    user: Schema.ObjectId,
    folder: String,
    name: String,
    affiliation: String,
    behavior: String,
    attacks: {
        name: String,
        dmg: Number,
        dmgType: String,
        north: Number,
        south: Number,
        east: Number,
        west: Number,
        displacement: Number,
        spread: Number
}
})

module.exports = mongoose.model('Foe', foeSchema)