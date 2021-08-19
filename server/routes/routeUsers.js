const routes = require('express').Router()
const Controller = require('../controllers/controlUsers')
const {authentication, authorization} = require('../middlewares/auth')

// routes.get('/', (req, res) => {
//   res.send('Welcome to Aniplay route anime')
// })

routes.post('/login', Controller.googleLogin)

routes.use(authentication)

routes.post('/bookmark', Controller.addBookmark )
routes.get('/bookmark/', Controller.findBookmark )
routes.get('/bookmark/:id', Controller.findBookmarkOne )

routes.use('/bookmark/:id', authorization )

routes.patch('/bookmark/:id', Controller.statusBookmark )
routes.delete('/bookmark/:id', Controller.deleteBookmark )


module.exports = routes