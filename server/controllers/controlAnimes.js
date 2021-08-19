const jikan = require('../APIs/jikanMal')
const simpleAnime = require('../APIs/simpleAnime')

class Controller {
    static searchAnime (req, res, next) {
        let {q} = req.query
        // console.log(q);cleaclear


        jikan({
            url: `/search/anime`,
            params: {q, page: 1},
            method: 'get'
        })
        .then(({data}) => {
            // console.log(data);
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static upcomingAnime (req, res, next) {
        jikan({
            url: `/season/later`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static infoAnime (req, res, next) {
        let id = req.params.mal_id
        jikan({
            url: `/anime/${id}`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
    
    // static latestAnime (req, res, next) {
    //     simpleAnime({
    //         url: '/list/recent',
    //         method: 'get'
    //     })
    //     .then(({data}) => {
    //         res.status(200).json(data.data)
    //     })
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })
    // }

    

    static detailAnime (req, res, next) {
        let {vid_id} = req.query

        simpleAnime({
            url: `/info/videos/${vid_id}`,
            method: 'get'
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static searchAnimeVideos (req, res, next) {
        let {keyword} = req.query

        simpleAnime({
            url: `/search/${keyword}`,
            method: 'get'
        })
        .then(({data}) => {
            let result = data.data
            let video = {}
            keyword = keyword.toLowerCase()
            result.forEach(el => {
                let title = el.title.toLowerCase()
                if (title == keyword) {
                    video = el
                }
            })
                
            res.status(200).json({video})

        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
}

module.exports = Controller