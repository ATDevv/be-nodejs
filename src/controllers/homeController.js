const connection = require('../config/database')
const {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
} = require('../services/crudService')

const getHomePage = async (req, res) => {
    const results = await getAllUsers()
    return res.render('home.ejs', { listUsers: results })
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUser = async (req, res) => {
    const user = await getUserById(req, res)
    return res.render('update.ejs', { user: user })
}

const postCreateUser = async (req, res) => {
    await createNewUser(req, res)
}

const postUpdateUser = async (req, res) => {
    await updateUser(req, res)
}

module.exports = {
    getHomePage,
    getAboutPage,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
}
