const EmployeeModel = require('../models/employee')

class EmployeeService {

  static async findById(id) {
    return EmployeeModel.findById(id)
  }

  static async findByName(name) {
    let pattern = new RegExp(name, 'ig')
    return EmployeeModel.find({ $or: [
      {other_names: pattern}, {surname: pattern}, {full_name: pattern}
    ] })
  }

  static async findByUsername(username) {
    return EmployeeModel.findOne({username})
  }
  
  static async findAll() {
    return EmployeeModel.find()
  }

  static async create(dao) {
    return EmployeeModel.create(dao)
  }

  static async updateOne(update) {
    return EmployeeModel.findByIdAndUpdate(update._id, {$set: update})
  }

  static async removeOne(id) {
    return EmployeeModel.findByIdAndRemove(id)
  }

}

module.exports = EmployeeService