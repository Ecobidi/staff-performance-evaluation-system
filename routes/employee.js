const router = require('express').Router()
// const { body } = require('express-validator')
const EmployeeController = require('../controllers/employee')

router.get('/', EmployeeController.getEmployeesPage)

router.get('/new', EmployeeController.createEmployeePage)

router.post('/new', EmployeeController.createEmployee)

router.get('/remove/:employee_id', EmployeeController.removeEmployee)

module.exports = router