const connection = require('../config/database')
const {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
} = require('../services/crudService')
const User = require('../models/user')

const getHomePage = async (req, res) => {
    const results = await User.find({})
    return res.render('home.ejs', { listUsers: results })
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
    const userId = req.params.id
    const user = await User.findById(userId).exec()
    return res.render('update.ejs', { user: user })
}

const postCreateUser = async (req, res) => {
    await createNewUser(req, res)
}

const postUpdateUser = async (req, res) => {
    const { id, email, name, city } = req.body

    await User.updateOne(
        { _id: id },
        { email: email, name: name, city: city }
    )
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const user = await getUserById(req, res)
    return res.render('delete.ejs', { user: user })
}

const postHandleRemoveUser = async (req, res) => {
    await deleteUser(req, res)
}

module.exports = {
    getHomePage,
    getAboutPage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
}
