const EmployeeService = require('../services/employee')
const TaskService = require('../services/task')

class TaskController {

  static async getTasksPage(req, res) {
    let tasks = await TaskService.findAll()
    res.render('tasks', {tasks})
  }
 
  static async createTaskPage(req, res) {
    let emp_id = req.query.employee_id
    if (!emp_id) {
      return res.redirect('/tasks')
    }
    let employee = await EmployeeService.findById(emp_id)
    if (!employee) {
      return res.redirect('/tasks')
    }
    res.render('tasks-new', {error_msg: req.flash('error_msg'), employee})
  }

  static async createTask(req, res) {
    let dao = req.body
    try {
      await TaskService.create(dao)
      res.redirect('/tasks')
    } catch (err) {
      console.log(err)
      res.redirect('/tasks')
    }
  }

  static async changeTaskStatus(req, res) {
    let status = req.query.status
    let task_id = req.params.task_id
    try {
      await TaskService.updateStatus(task_id, status)
      res.redirect('/tasks')
    } catch (error) {
      console.log(error)
      res.redirect('/tasks')
    }
  }

  static async removeTask(req, res) {
    try {
      await TaskService.removeOne(req.params.task_id)
      res.redirect('/tasks')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/tasks')
    }
  }

}

module.exports = TaskController