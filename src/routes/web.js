const express = require('express')
const router = express.Router()
const {
    getHomePage,
    getAboutPage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
} = require('../controllers/homeController')

//get
router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdateUser)

//post
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)

module.exports = router
