const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        name: { type: String, required: true },
        salary: { type: Number, required: true },
        currency: { type: String, required: true },
        department: { type: String, required: true },
        sub_department: {type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)