const connection = require('../config/database')

const getHomePage = (req, res) => {
    // let users = []
    // connection.query('select * from Users u', function (err, results, fields) {
    //     users = results
    //     console.log('>>> Results = ', results) // results contains rows returned by server

    //     // console.log('>>> Check users = ', users)
    //     res.send(JSON.stringify(users))
    // })
    return res.render('home.ejs')
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    const sqlInsert = 'insert into Users (email, name, city) values(?, ?, ?)'
    let { email, name, city } = req.body

    //?1 = email...
    // ? : pass dynamic data

    connection.query(sqlInsert, [email, name, city], (err, results) => {
        if (err) throw err
        res.send('Create Succes')
    })
}

module.exports = { getHomePage, getAboutPage, postCreateUser }
