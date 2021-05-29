const EvaluationModel = require('../models/evaluation')

class EvaluationService {

  static async findById(id) {
    return EvaluationModel.findById(id).populate('task employee evaluator').exec()
  }
  
  static async findAll() {
    return EvaluationModel.find().populate('task employee evaluator').exec()
  }

  static async create(dao) {
    return EvaluationModel.create(dao)
  }

  static async removeOne(id) {
    return EvaluationModel.findByIdAndRemove(id)
  }

}

module.exports = EvaluationService