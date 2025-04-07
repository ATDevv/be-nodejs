const User = require('../models/user')

const getUserAPI = async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
        data: users
    })
}

module.exports = {
    getUserAPI
}