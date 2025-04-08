const User = require('../models/user')

const getUserAPI = async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
        data: users,
    })
}

const postUserAPI = async (req, res) => {
    let { email, name, city } = req.body

    const user = await User.create({
        email: email,
        name: name,
        city: city,
    })

    return res.status(200).json({
        EC: 0,
        data: user,
    })
}

const putUserAPI = async (req, res) => {
    const { id, email, name, city } = req.body

    let user = await User.updateOne(
        { _id: id },
        { email: email, name: name, city: city }
    )
    return res.status(200).json({
        EC: 0,
        data: user,
    })
}

module.exports = {
    getUserAPI,
    postUserAPI,
    putUserAPI,
}
