const mongoose = require('mongoose')

const user = new mongoose.Schema({
    email: String,
    name: String,
    city: String
})
const User = mongoose.model('user', user)

module.exports = User
