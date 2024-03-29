const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const employeeRouter = require('./routes/employee-router')
const authRouter = require('./authentication/auth-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello Employee World!')
})

app.use('/auth', authRouter)
app.use('/api', employeeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))