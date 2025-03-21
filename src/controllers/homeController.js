const connection = require('../config/database')

const getHomePage = (req, res) => {
    let users = []
    connection.query('select * from Users u', function (err, results, fields) {
        users = results
        console.log('>>> Results = ', results) // results contains rows returned by server

        // console.log('>>> Check users = ', users)
        res.send(JSON.stringify(users))
    })
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, getAboutPage }
