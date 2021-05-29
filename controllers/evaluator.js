const path = require('path')
const EvaluatorService = require('../services/evaluator')
const UserService = require('../services/user')

class EvaluatorController {

  static async getEvaluatorsPage(req, res) {
    let evaluators = await EvaluatorService.findAll()
    res.render('evaluators', {evaluators})
  }

  static async createEvaluatorPage(req, res) {
    res.render('evaluators-new', { error_msg: req.flash('error_msg') })
  }

  static async createEvaluator(req, res) {
    let dao = req.body
    if (dao.password != dao.retype_password) {
      req.flash('error_msg', 'Passwords do not match')
      return res.redirect('/evaluators/new')
    }
    try {
      // check for same username
      let sameUsername1 = await EvaluatorService.findByUsername(dao.username)
      let sameUsername2 = await UserService.findByUsername(dao.username)
      if (sameUsername1 || sameUsername2) {
        req.flash('error_msg', 'Username is already taken')
        return res.redirect('/evaluators/new')
      }
      if (req.files) {
        let file = req.files.photo
        let extname = path.extname(file.name)
        let filename = 'evaluator_' + new Date().getMilliseconds() + extname
        await file.mv(process.cwd() + '/uploads/images/' + filename)
        dao.photo = filename
        await EvaluatorService.create(dao)
      } else {
        await EvaluatorService.create(dao)
      }
      res.redirect('/evaluators')
    } catch (err) {
      console.log(err)
      res.redirect('/evaluators')
    }
  }

  static async removeEvaluator(req, res) {
    try {
      await EvaluatorService.removeOne(req.params.evaluator_id)
      res.redirect('/evaluators')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/evaluators')
    }
  }

}

module.exports = EvaluatorController