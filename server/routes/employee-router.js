const express = require('express')

const EmpCtrl = require('../controllers/employee-controller')

const router = express.Router()

router.post('/employee', EmpCtrl.createEmployee)
router.delete('/employee/:id', EmpCtrl.deleteEmployee)
router.get('/employee/:id', EmpCtrl.getEmployeeById)
router.get('/employee', EmpCtrl.getEmployees)
router.get('/employeeStats', EmpCtrl.getStats)
router.post('/testdata', EmpCtrl.loadTestData)
module.exports = router