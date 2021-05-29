const StationModel = require('../models/station')

class StationService {

  static async findById(id) {
    return StationModel.findById(id)
  }
  
  static async findAll() {
    return StationModel.find()
  }

  static async create(dao) {
    return StationModel.create(dao)
  }

  static async removeOne(id) {
    return StationModel.findByIdAndRemove(id)
  }

}

module.exports = StationService