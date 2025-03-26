const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    const sqlInsert = 'insert into Users (email, name, city) values(?, ?, ?)'
    let { email, name, city } = req.body

    //?1 = email...
    // ? : pass dynamic data

    try {
        const [results, fields] = await connection.query(sqlInsert, [
            email,
            name,
            city,
        ])
        res.send('Create Succes')
    } catch (err) {
        console.log(err)
    }
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

module.exports = { getHomePage, getAboutPage, postCreateUser, getCreateUser }
