const express = require('express')
const router = express.Router()
const { getHomePage, getAboutPage, postCreateUser, getCreateUser } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/create', getCreateUser)

router.post('/create-user', postCreateUser)

module.exports = router
