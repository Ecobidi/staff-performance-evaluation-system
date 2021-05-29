const TaskModel = require('../models/task')

class TaskService {

  static async findById(id) {
    return await TaskModel.findById(id).populate('assigned_to').exec()
  }

  static async findAll() {
    return TaskModel.find().populate('assigned_to').exec()
  }

  static async create(dao) {
    return TaskModel.create(dao)
  }

  static async updateStatus(task_id, status) {
    return TaskModel.findByIdAndUpdate(task_id, {$set: {status}})
  }

  static async removeOne(id) {
    return TaskModel.findByIdAndRemove(id)
  }

}

module.exports = TaskService