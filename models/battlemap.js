const mongoose = require('mongoose')
const Schema = mongoose.Schema

const innerLayoutSchema = new Schema({
    value: Number,
    x: Number,
    y: Number,
})

const battlemapSchema = new Schema({
    user: Schema.ObjectId,
    folder: String,
    name: String,
    foes: [Schema.ObjectId],
    grid: {
        layout: [innerLayoutSchema],
        
    }
})

module.exports = mongoose.model('Battlemap', battlemapSchema)