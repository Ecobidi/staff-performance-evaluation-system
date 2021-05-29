const router = require('express').Router()
const UserService = require('../services/user')
const EvaluatorService = require('../services/evaluator')

router.get('/', async (req, res) => {
  res.render('login', {error_msg: req.flash('error_msg')})
})

router.post('/', async (req,res) => {
  let loginType = req.body.login_type
  let dao = req.body
  try {
    let user
    switch (loginType) {
      case 'admin': {
        user = await UserService.findByUsername(dao.username)
        break
      }
      case 'evaluator': {
        user = await EvaluatorService.findByUsername(dao.username)
        break
      }
    }

    // check for password match
    if (user && user.password == dao.password) {
      req.session.loggedIn = true
      req.session.user = user
      res.redirect('/dashboard')
    } else {
      req.flash('error_msg', 'Incorrect Login Details')
      res.redirect('/login')
    }
  } catch (err) {
    console.log(err)
    req.flash('error_msg', 'Last Operation Failed')
    res.redirect('/login')
  }
})

module.exports = router