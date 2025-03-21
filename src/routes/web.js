const express = require('express')
const router = express.Router()
const { getHomePage, getAboutPage } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/about', getAboutPage)

module.exports = router
