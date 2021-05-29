const mongoose = require('mongoose')
let DesignationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
})

module.exports = mongoose.model('designation', DesignationSchema)