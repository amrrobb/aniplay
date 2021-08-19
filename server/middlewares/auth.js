const { verifyJWT } = require('../helpers/jwt') 
const {User, Bookmark} = require('../models')

function authentication(req, res, next) {
    // console.log(req.headers);
    const access_token = req.headers.access_token
    if(access_token){
        try {
            const payload = verifyJWT(access_token)
            User.findByPk(payload.id)
            .then(data => {
                if (data) {
                    req.user = {
                        id: data.id,
                        email: data.email,
                    }
                    next()
                }
                else {
                    next({code: 401, message: "Invalid access token"})
                }
            })
            .catch(err => {
                next({code: 500, message: err.message })
            })
            
        } catch (err) {
            next({code: 401, message: "Invalid access token"})
        }
    }
    else {
        next({code: 401, message: "User must be logged in"})
    }
}

function authorization(req, res, next) {
    Bookmark.findOne({
        where: {
            userId: req.user.id,
            mal_id: req.params.id
        }
    })
    .then(data => {
        if(data){
            if(req.user.id === data.userId) {
                next()
            }
            else {
                next({code: 403})
            }
        }
        else {
            next({code: 404, message: "Anime not found"})
        }
    })
    .catch(err => {
        next({code: 500, message: err.message })
    })
}

module.exports = {authentication, authorization}