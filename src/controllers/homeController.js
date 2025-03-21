const getHomePage = (req, res) => {
    res.send('Hello World! 123')
}

const getAboutPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, getAboutPage }
