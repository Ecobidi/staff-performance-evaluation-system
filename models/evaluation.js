const mongoose = require('mongoose')
let EvaluationSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task'
  },
  evaluator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'evaluator'
  },
  evaluation: {
    efficiency: Number,
    quality: Number,
    timeliness: Number,
    accuracy: Number,
    teamwork: Number,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
  }
})

module.exports = mongoose.model('evaluation', EvaluationSchema)