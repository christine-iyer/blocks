const { Schema, model } = require('mongoose')

const blockSchema = new Schema({
  alt: { type: String, required: true },
  img: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('Block', blockSchema)
