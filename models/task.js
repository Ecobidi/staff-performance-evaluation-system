const mongoose = require('mongoose')
let TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  due_date: {
    type: Date,
  },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee'
  },
  status: {
    type: String,
    enum: ['pending', 'complete'],
    default: 'pending',
  }
})

module.exports = mongoose.model('task', TaskSchema)