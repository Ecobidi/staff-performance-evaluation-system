const router = require('express').Router()
const EvaluatorController = require('../controllers/evaluator')

router.get('/', EvaluatorController.getEvaluatorsPage)

router.get('/new', EvaluatorController.createEvaluatorPage)

router.post('/new', EvaluatorController.createEvaluator)

router.get('/remove/:evaluator_id', EvaluatorController.removeEvaluator)

module.exports = router