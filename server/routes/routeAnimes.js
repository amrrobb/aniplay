const routes = require('express').Router()
const Controller = require('../controllers/controlAnimes')

// routes.get('/', (req, res) => {
//   res.send('Welcome to Aniplay route anime')
// })

// Information - jikan
routes.get('/search', Controller.searchAnime )
routes.get('/upcoming', Controller.upcomingAnime )
routes.get('/info/:mal_id', Controller.infoAnime )


// Streaming - simpleanime

routes.get('/videos', Controller.searchAnimeVideos )
routes.get('/detail', Controller.detailAnime )
// routes.get('/latest', Controller.latestAnime )

module.exports = routes