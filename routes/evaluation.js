const router = require('express').Router()
const EvaluationController = require('../controllers/evaluation')

router.get('/', EvaluationController.getEvaluationsPage)

router.get('/new', EvaluationController.createEvaluationPage)

router.post('/new', EvaluationController.createEvaluation)

router.get('/remove/:evaluation_id', EvaluationController.removeEvaluation)

module.exports = router