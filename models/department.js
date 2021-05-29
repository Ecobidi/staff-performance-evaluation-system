const mongoose = require('mongoose')
let Department = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
})

module.exports = mongoose.model('department', Department)