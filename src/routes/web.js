const express = require('express')
const router = express.Router()
const {
    getHomePage,
    getAboutPage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
} = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdateUser)

router.post('/create-user', postCreateUser)

module.exports = router
