const express = require('express')
const routerAPI = express.Router()
const { getUserAPI, postUserAPI } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
    res.send('Hi api')
})

routerAPI.get('/users', getUserAPI)
routerAPI.post('/users', postUserAPI)

module.exports = routerAPI