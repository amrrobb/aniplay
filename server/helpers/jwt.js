require('dotenv').config()
const jwt = require('jsonwebtoken')

function signJWT(payload){
    return jwt.sign(payload, process.env.JWT_KEY)
}

function verifyJWT(token){
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = { signJWT, verifyJWT}