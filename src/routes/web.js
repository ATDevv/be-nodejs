const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! 123')
})

router.get('/about', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router