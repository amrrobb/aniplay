var axios = require("axios")

const instance = axios.create({
    baseURL: 'https://api.jikan.moe/v3'
});

module.exports = instance