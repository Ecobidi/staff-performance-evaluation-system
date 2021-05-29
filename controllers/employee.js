const path = require('path')
const EmployeeService = require('../services/employee')
const DesignationService = require('../services/designation')
const DepartmentService = require('../services/department')

class EmployeeController {

  static async getEmployeesPage(req, res) {
    try {
      if (req.query.search && req.query.search.length > 1) {
        let employees = await EmployeeService.findByName(req.query.search) 
        return res.render('employees', {employees}) 
      }
      let employees = await EmployeeService.findAll()
      res.render('employees', {employees})
    } catch (error) {
      console.log(error)
      res.redirect('/employees')
    }    
  }
 
  static async createEmployeePage(req, res) {
    try {
      let departments = await DepartmentService.findAll()
      let designations = await DesignationService.findAll()
      res.render('employees-new', {designations, departments})
    } catch (error) {
      console.log(error)
      res.redirect('/employees')      
    }
  }

  static async createEmployee(req, res) {
    let dao = req.body
    try {
      if (req.files) {
        let file = req.files.photo
        let extname = path.extname(file.name)
        let filename = 'employee_' + new Date().getMilliseconds() + extname
        await file.mv(process.cwd() + '/uploads/images/' + filename)
        dao.photo = filename
        await EmployeeService.create(dao)
      } else {
        await EmployeeService.create(dao)
      }
      res.redirect('/employees')
    } catch (err) {
      console.log(err)
      res.redirect('/employees')
    }
  }

  static async removeEmployee(req, res) {
    try {
      await EmployeeService.removeOne(req.params.employee_id)
      res.redirect('/employees')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/employees')
    }
  }

}

module.exports = EmployeeController