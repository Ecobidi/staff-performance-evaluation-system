const mongoose = require('mongoose')

let EvaluatorSchema = new mongoose.Schema({
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
  username: {
    type: String,
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: 'evaluator',
  },
  photo: {
    type: String,
  }
})

module.exports = mongoose.model('evaluator', EvaluatorSchema)

EvaluatorSchema.pre('save', (next) => {
  this.full_name = this.surname + ' ' + this.other_names
  next()
})