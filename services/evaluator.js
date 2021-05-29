const EvaluatorModel = require('../models/evaluator')

class EvaluatorService {

  static async findById(id) {
    return EvaluatorModel.findById(id)
  }

  static async findByName(name) {
    let pattern = new RegExp(name, 'ig')
    return EvaluatorModel.find({ $or: [
      {first_name: pattern}, {surname: pattern}, {full_name: pattern}
    ] })
  }

  static async findByUsername(username) {
    return EvaluatorModel.findOne({username})
  }
  
  static async findAll() {
    return EvaluatorModel.find()
  }

  static async create(dao) {
    return EvaluatorModel.create(dao)
  }

  static async updateOne(update) {
    return EvaluatorModel.findByIdAndUpdate(update._id, {$set: update})
  }

  static async removeOne(id) {
    return EvaluatorModel.findByIdAndRemove(id)
  }

}

module.exports = EvaluatorService