const connection = require('../config/database')

const getAllUsers = async () => {
    const sqlSelectAll = 'select * from Users u'
    const [results, fields] = await connection.query(sqlSelectAll)
    return results
}

const createNewUser = async (req, res) => {
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

module.exports = {
    getAllUsers,
    createNewUser,
}
