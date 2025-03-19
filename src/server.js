require('dotenv').config()
const express = require('express')
const path = require('path') //Common js
const mysql = require('mysql2')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888

//config view engine
configViewEngine(app)

//route
app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'd1aa',
})

// A simple SELECT query
connection.query('select * from Users u', function (err, results, fields) {
    console.log('>>> Results = ', results) // results contains rows returned by server
    console.log('>>> Fields = ', fields) // fields contains extra meta data about results, if available
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
