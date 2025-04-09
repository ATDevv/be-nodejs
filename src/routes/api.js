const express = require('express')
const routerAPI = express.Router()
const {
    getUserAPI,
    postUserAPI,
    putUserAPI,
    deleteUserAPI,
} = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
    res.send('Hi api')
})

routerAPI.get('/users', getUserAPI)
routerAPI.post('/users', postUserAPI)
routerAPI.put('/users', putUserAPI)
routerAPI.delete('/users', deleteUserAPI)

module.exports = routerAPI
