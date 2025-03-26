const connection = require('../config/database')
const {
    getAllUsers,
    createNewUser,
    updateUser,
} = require('../services/crudService')

const getHomePage = async (req, res) => {
    const results = await getAllUsers()
    return res.render('home.ejs', { listUsers: results })
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    await createNewUser(req, res)
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
    const user = await updateUser(req, res)
    return res.render('update.ejs', { user: user })
}

module.exports = {
    getHomePage,
    getAboutPage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
}
