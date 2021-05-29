const mongoose = require('mongoose')

let EmployeeSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
  },
  other_names: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
  },
  gender: {
    type: String,
  },
  department: {
    type: String,
  },
  designation: {
    type: String
  },
  photo: {
    type: String,
  }
})

module.exports = mongoose.model('employee', EmployeeSchema)

EmployeeSchema.pre('save', (next) => {
  this.full_name = this.surname + ' ' + this.other_names
  next()
})