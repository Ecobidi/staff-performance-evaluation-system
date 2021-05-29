const router = require('express').Router()
const Designation = require('../controllers/designation')

router.get('/', Designation.getDesignationsPage)

router.get('/new', Designation.createDesignationPage)

router.post('/new', Designation.createDesignation)

router.get('/remove/:designation_id', Designation.removeDesignation)

module.exports = router