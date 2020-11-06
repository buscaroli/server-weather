const express = require('express')
const hbs = require('hbs')
const path = require('path')

// Constants
const port = 3000
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')

// Configuration
const app = express()
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Historical Data'
    })
})

app.get('*', (req, res) => {
    res.render('index', {
        title: '404 Page not Found'
    })
})

// Starting the server
app.listen(port, () => {
    console.log(`Server running on port ${process.env.PORT || port}`)
})