require('dotenv').config()
const express = require('express')
const path = require('path') //Common js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require("./routes/web")

const app = express()
const port = process.env.PORT

//config view engine
configViewEngine(app)

//route
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
