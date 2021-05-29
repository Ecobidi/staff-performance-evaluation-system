const router = require('express').Router()
const TaskController = require('../controllers/task')

router.get('/', TaskController.getTasksPage)

router.get('/change-status/:task_id', TaskController.changeTaskStatus)

router.get('/new', TaskController.createTaskPage)

router.post('/new', TaskController.createTask)

router.get('/remove/:task_id', TaskController.removeTask)

module.exports = router