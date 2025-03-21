const getHomePage = (res, req) => {
    res.send('Hello World! 123')
}

const getAboutPage = (res, req) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, getAboutPage }
