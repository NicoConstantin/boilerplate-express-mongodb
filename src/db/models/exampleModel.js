const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  address: {
    type: String,
    required: true,
    lowercase: true
  }
})

const Example = mongoose.model('example', exampleSchema)

module.exports = Example
