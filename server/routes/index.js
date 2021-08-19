const routes = require('express').Router()
const animes = require('./routeAnimes')
const users = require('./routeUsers')
const errorHandler = require('../middlewares/errorHandler')

routes.get('/', (req, res) => {
  res.send('Welcome to Aniplay')
})

routes.use('/anime', animes)
routes.use('/user', users )

routes.use(errorHandler)

module.exports = routes

