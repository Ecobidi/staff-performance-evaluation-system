const DepartmentModel = require('../models/department')

class DepartmentService {

  static async findById(id) {
    return DepartmentModel.findById(id)
  }

  static async findByName(name) {
    let pattern = new RegExp(name, 'ig')
    return DepartmentModel.find({name: pattern})
  }
  
  static async findAll() {
    return DepartmentModel.find({})
  }

  static async create(dao) {
    return DepartmentModel.create(dao)
  }

  static async removeOne(id) {
    return DepartmentModel.findByIdAndRemove(id)
  }

}

module.exports = DepartmentService