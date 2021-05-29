const DepartmentService = require('../services/department')

class DepartmentController {

  static async getDepartmentsPage(req, res) {
    try {
      if (req.query.search && req.query.search.length > 1) {
        let departments = await DepartmentService.findByName(req.query.search) 
        return res.render('departments', {departments}) 
      }
      let departments = await DepartmentService.findAll()
      res.render('departments', {departments})
    } catch (error) {
      console.log(error)
      res.redirect('/departments')
    }
    
  }
 
  static async createDepartmentPage(req, res) {
    res.render('departments-new', {error_msg: req.flash('error_msg')})
  }

  static async createDepartment(req, res) {
    let dao = req.body
    try {
      await DepartmentService.create(dao)
      res.redirect('/departments')
    } catch (err) {
      console.log(err)
      res.redirect('/departments')
    }
  }

  static async removeDepartment(req, res) {
    try {
      await DepartmentService.removeOne(req.params.department_id)
      res.redirect('/departments')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/departments')
    }
  }

}

module.exports = DepartmentController