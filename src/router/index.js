const express = require('express')
const Route = express.Router()
const userRoute = require('./user')

Route
    .use('/user', userRoute)

module.exports = Route