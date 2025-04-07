const express = require('express')
const routerAPI = express.Router()
const { getUserAPI } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
    res.send('Hi api')
})

routerAPI.get('/users', getUserAPI)

module.exports = routerAPI
