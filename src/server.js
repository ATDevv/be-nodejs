require('dotenv').config()
const express = require('express')
const path = require('path') //Common js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8888

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//config view engine
configViewEngine(app)

const kittySchema = new mongoose.Schema({
    name: String,
})
const Kitten = mongoose.model('Kitten', kittySchema)
const cat = new Kitten({ name: 'Silence' })
cat.save()

//test connection
;(async () => {
    try {
        await connection()
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>>> Error connect to db ', error)
    }
})()

//route
app.use('/', webRoutes)
