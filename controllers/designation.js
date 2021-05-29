const DesignationService = require('../services/designation')

class DesignationController {

  static async getDesignationsPage(req, res) {
    try {
      if (req.query.search && req.query.search.length > 1) {
        let designations = await DesignationService.findByName(req.query.search) 
        return res.render('designations', {designations}) 
      }
      let designations = await DesignationService.findAll()
      res.render('designations', {designations})
    } catch (error) {
      console.log(error)
      res.redirect('/designations')
    }
  }
 
  static async createDesignationPage(req, res) {
    res.render('designations-new', {error_msg: req.flash('error_msg')})
  }

  static async createDesignation(req, res) {
    let dao = req.body
    try {
      await DesignationService.create(dao)
      res.redirect('/designations')
    } catch (err) {
      console.log(err)
      res.redirect('/designations')
    }
  }

  static async removeDesignation(req, res) {
    try {
      await DesignationService.removeOne(req.params.designation_id)
      res.redirect('/designations')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/designations')
    }
  }

}

module.exports = DesignationController