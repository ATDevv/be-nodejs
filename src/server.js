require('dotenv').config()
const express = require('express')
const path = require('path') //Common js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888

//config view engine
configViewEngine(app)

//route
app.use('/', webRoutes)

// A simple SELECT query
connection.query('select * from Users u', function (err, results, fields) {
    console.log('>>> Results = ', results) // results contains rows returned by server
    console.log('>>> Fields = ', fields) // fields contains extra meta data about results, if available
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
