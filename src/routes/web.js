const express = require('express')
const router = express.Router()
const { getHomPage, getAboutPage } = require('../controllers/homeController')

router.get('/', getHomPage)
router.get('/about', getAboutPage)

module.exports = router
