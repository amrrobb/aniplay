const {User, Bookmark} = require('../models')
const {OAuth2Client} = require('google-auth-library')
const {signJWT} = require('../helpers/jwt')

require('dotenv').config()

class Controller {
    static googleLogin(req, res, next){
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let payload = null
        
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that 
        })
        .then(ticket => {
            payload = ticket.getPayload();
            // const userid = payload['sub'];
            return User.findOne({
                where: {email: payload.email}
            })
        })
        .then(data => {
            if (!data) {
                let password = 'secret' + Math.round(+new Date() /1000 )
                
                return User.create({
                    email: payload.email,
                    password: password,
                })
            }
            else {
                return data
            }
        })
        .then(data => {
            const access_token = signJWT({
                email: data.email,
                id: data.id,
            })
            
            res.status(200).json({
                access_token, id: data.id, email: data.email
            })
        })
        .catch(err => {
            next({code: 500, message: err.message})
        })
    }

    static addBookmark (req, res, next) {
        let {image_url, mal_id, title} = req.body

        let userId = req.user.id
        let status = "Plan to Watch"
        let input = {image_url, mal_id, userId, status, title}

        Bookmark.create(input)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            if (err.name === "SequelizeValidationError"){
                next({code: 400, sequelize: err.errors, name: err.name})
            } 
            else  {
                next({code: 500, message: err.message})
            }
        })
    }

    static findBookmark (req, res, next) {
        let {status} = req.query
        let id = req.user.id
        let where = {userId: id}

        if (status != 'All') {
            where.status = status
        }
        
        // console.log(where);

        Bookmark.findAll({
            where
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next({code: 500, message: err.message})
        })
    }

    static findBookmarkOne (req, res, next) {
        Bookmark.findOne({
            where: {
                userId: req.user.id,
                mal_id: req.params.id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next({code: 500, message: err.message})
        })
    }

    static deleteBookmark (req, res, next) {
        const id = req.params.id
        
        Bookmark.destroy({
            where: {mal_id: id}
        })
        .then(() => {
            res.status(200).json({message: 'delete bookmark success'})
        })
        .catch(err => {
            next({code: 500, message: err.message})

        })
    }

    static statusBookmark (req, res, next) {
        let mal_id = req.params.id
        let {status} = req.body
        let input = {status}

        Bookmark.update(input, {
            where: {
                userId: req.user.id,
                mal_id: req.params.id
            },
            returning: true
        })
        .then(data => {
            if (data[0] == 1) {
                data = data[1][0]
                res.status(200).json(data)
            }
        })
        .catch(err => {
            next({code: 500, message: err.message})
        })
    }
}

module.exports = Controller