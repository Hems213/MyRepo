const EmpCtrl = require('../../controllers/employee-controller')

jest.mock('../../models/employee-model');
const Employee = require('../../models/employee-model');
const helper = require('../../controllers/helper');
const req = {}
const res = {}
res.status = jest.fn().mockReturnThis();
res.json = jest.fn();
Employee.mockImplementation(() => {
    return {
        save: jest.fn().mockImplementation(()=>{
            return Promise.resolve('Success data');
        }),
        findOneAndDelete: jest.fn().mockImplementation((a1, a2)=>{
            a2();
            return Promise.resolve('Success data');
        })()
}});
// Employee.mockImplementation(() => {
//     return {
//         save: jest.fn().mockImplementation(() => {
//             return {
//                 then: jest.fn().mockImplementation(() => {
//                     return {
//                         catch: jest.fn()
//                     }
//                 })
//             }
//         })
//     }
// })
test('basic test for create Employee', () => {
    req.body = { 'test': 'test' };
    EmpCtrl.createEmployee(req, res);
    expect(Employee).toHaveBeenCalled();
    expect(Employee().save).toHaveBeenCalled();
});
test('basic test for delete employee', () => {
    res.status = jest.fn();
    req.params ={
        id:'test'
    }
    EmpCtrl.deleteEmployee(req, res);
    expect(res.status).toHaveBeenCalled();    
})