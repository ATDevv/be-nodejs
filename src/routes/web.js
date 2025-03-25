const express = require('express')
const router = express.Router()
const { getHomePage, getAboutPage, postCreateUser } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/about', getAboutPage)

router.post('/create-user', postCreateUser)

module.exports = router
