const axios = require('axios')
require('dotenv').config()

const instance = axios.create({
    baseURL: 'https://simpleanime.p.rapidapi.com/anime',
    headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
    }
});

module.exports = instance