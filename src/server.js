const express = require('express')
const path = require('path') //Common js
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.render('sample1.ejs')
})

app.get('/product', (req, res) => {
    res.render('sample2.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
