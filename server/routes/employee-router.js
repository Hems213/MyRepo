const express = require('express')

const EmpCtrl = require('../controllers/employee-controller')
const jwtAuth = require('../authentication/jwtAuth')
const AuthCtrl = require('../authentication/controller')
const router = express.Router()
//setup jwt auth and error handling
router.use(jwtAuth.validateJwtAuth(), AuthCtrl.errorHandling);

router.post('/employee', EmpCtrl.createEmployee)
router.delete('/employee/:id', EmpCtrl.deleteEmployee)
router.get('/employee/:id', EmpCtrl.getEmployeeById)
router.get('/employee', EmpCtrl.getEmployees)
router.get('/employeeStats', EmpCtrl.getStats)
router.post('/testdata', EmpCtrl.loadTestData)
module.exports = router