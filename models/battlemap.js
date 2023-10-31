const mongoose = require('mongoose')
const Schema = mongoose.Schema


const battlemapSchema = new Schema({
    user: Schema.ObjectId,
    folder: String,
    name: String,
    foes: [Schema.ObjectId],
    attacks: [Object],
    grid: [Object],
})

module.exports = mongoose.model('Battlemap', battlemapSchema)