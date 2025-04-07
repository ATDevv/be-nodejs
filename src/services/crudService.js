const connection = require('../config/database')
const User = require('../models/user')

const getAllUsers = async () => {
    const sqlSelectAll = 'select * from Users u'

    try {
        const [results, fields] = await connection.query(sqlSelectAll)
        return results
    } catch (err) {
        console.log(err)
    }
}

const createNewUser = async (req, res) => {
    let { email, name, city } = req.body

    await User.create({
        email: email,
        name: name,
        city: city
    })
    
    res.send('Success')
}

const getUserById = async (req, res) => {
    const userId = req.params.id
    const sqlSelectId = 'Select * from Users where id = ?'
    try {
        const [results, fields] = await connection.query(sqlSelectId, [userId])
        const user = results && results.length > 0 ? results[0] : {}
        //results return array
        return user
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req, res) => {
    const sqlUpdate = 'update Users set email=?, name=?, city=?  where id=?'
    let { email, name, city, id } = req.body

    try {
        const [results, fields] = await connection.query(sqlUpdate, [
            email,
            name,
            city,
            id,
        ])
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (req, res) => {
    const sqlDelete = 'delete from Users where  id=?'
    const id = req.body.id

    try {
        const [results, fields] = await connection.query(sqlDelete, [id])
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser,
}
