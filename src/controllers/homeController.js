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
    const a = [];
    a.push(req.body.email)
    a.push(req.body.name)
    a.push(req.body.city)
    res.send(a)
    console.log(a)
}

module.exports = { getHomePage, getAboutPage, postCreateUser }
