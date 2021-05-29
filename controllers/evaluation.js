const EmployeeService = require('../services/employee')
const EvaluationService = require('../services/evaluation')
const TaskService = require('../services/task')

class EvaluationController {
  static async getEvaluationsPage(req, res) {
    let evaluations = await EvaluationService.findAll()
    res.render('evaluations', {evaluations})
  }

  static async getEvaluationPage(req, res) {
    let evaluation = await EvaluationService.findById(req.params.evaluation_id)
    res.render('evaluations-new', {evaluation})
  }

  static async createEvaluationPage(req, res) {
    try {
      let task = await TaskService.findById(req.query.task_id)
      if (!task) {
        console.log('no task found with id ' + req.query.task_id)
        return res.redirect('/evaluations')
      }
      res.render('evaluations-new', {task})
    } catch (error) {
      console.log(error)
      res.redirect('/evaluations')
    }
  }

  static async createEvaluation(req, res) {
    let dao = req.body
    dao.evaluator = req.session.user._id
    try {
      await EvaluationService.create(dao)
      res.redirect('/evaluations')
    } catch (error) {
      console.log(error)
      res.redirect('/evaluations')
    }
  }



  static async removeEvaluation(req, res) {
    try {
      await EvaluationService.removeOne(req.params.evaluation_id)
      res.redirect('/evaluations')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/evaluations')
    }
  }
}

module.exports = EvaluationController