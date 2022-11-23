const Employee = require('../models/employee-model');
const helper = require('./helper');

createEmployee = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a employee',
        })
    }

    const emp = new Employee(body)

    if (!emp) {
        return res.status(400).json({ success: false, error: err })
    }

    emp
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: emp._id,
                message: 'Employee created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Employee not created!',
            })
        })
}


deleteEmployee = async (req, res) => {
    await Employee.findOneAndDelete({ _id: req.params.id }, (err, emp) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!emp) {
            return res
                .status(404)
                .json({ success: false, error: `Employee Unavailable` })
        }

        return res.status(200).json({ success: true, data: emp })
    }).catch(err => console.log(err))
}

getEmployeeById = async (req, res) => {
    await Employee.findOne({ _id: req.params.id }, (err, emp) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!emp) {
            return res
                .status(404)
                .json({ success: false, error: `Employee Unavailable` })
        }
        return res.status(200).json({ success: true, data: emp })
    }).catch(err => console.log(err))
}

getEmployees = async (req, res) => {
    await Employee.find({}, (err, emp) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!emp.length) {
            return res
                .status(404)
                .json({ success: false, error: `Employee dont exist` })
        }
        return res.status(200).json({ success: true, data: emp })
    }).catch(err => console.log(err))
}
getStats = async (req, res) => {
    console.log(req.query);
    const filterCondition = req.query.filterCondition;
    const criteria = helper.composeMatch(filterCondition);
    const groupDetails = req.query.aggregateOn;
    const numericField = req.query.numericField;
    const group = helper.composeGroup(groupDetails, numericField)
    console.log("Match", criteria);
    console.log("Group", group);
    try {
        const result = await Employee.aggregate(
            [
                { $match: criteria },
                {
                  $group: group
                }
              ]
        );
        return res.status(200).json({ success: true, data: emp });
    } catch (error) {
        return res.status(500).json({ success: false, data: error});
    }
}

module.exports = {
    createEmployee,
    deleteEmployee,
    getEmployees,
    getEmployeeById,
    getStats
}