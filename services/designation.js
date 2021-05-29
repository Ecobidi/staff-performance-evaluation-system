const DesignationModel = require('../models/designation')

class DesignationService {

  static async findById(id) {
    return DesignationModel.findById(id)
  }

  static async findByName(name) {
    let pattern = new RegExp(name, 'ig')
    return DesignationModel.find({name: pattern})
  }
  
  static async findAll() {
    return DesignationModel.find({})
  }

  static async create(dao) {
    return DesignationModel.create(dao)
  }

  static async removeOne(id) {
    return DesignationModel.findByIdAndRemove(id)
  }

}

module.exports = DesignationService